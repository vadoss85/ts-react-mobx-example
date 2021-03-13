import { makeStyles } from '@material-ui/core';
import React, { createRef, useEffect } from 'react'
import { StyledComponent } from '../../configure/theme';
import OlMap from "ol/Map";
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj'
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import {Circle, Fill, Style} from 'ol/style';

const _componentDisplayName = 'UIOLMap';

const useStyles = makeStyles(() =>({
  root: {
    width: '100%',
    height: '300px',
    '& .ol-attribution': {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'space-between',
    },
    '& .ol-zoom': {
      position: 'absolute',
      left: 0,
      top: 0,
    },
    '& .ol-rotate': {
      position: 'absolute',
      right: 0,
      top: 0,
    }
  },
}), {name: _componentDisplayName});

export interface UIOLMapProps extends StyledComponent<typeof useStyles> {
  latitude: number;
  longitude: number;
}

const UIOLMap = (props: UIOLMapProps) => {
  const classes = useStyles(props);
  const rootRef = createRef<HTMLDivElement>();
  const { longitude, latitude } = props;

  useEffect(() => {
    const coords = fromLonLat([longitude, latitude]);
    var point = new Point(coords);

    const map = new OlMap({
      controls: null,
      target: rootRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: new Style({
            image: new Circle({
              radius: 6,
              fill: new Fill({color: 'red'}),
            }),
          }),
        })
      ],
      view: new View({
        center: coords,
        zoom: 4,
      }),
    });
    return () => {
      map.dispose();
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className={classes.root}
    />
  );
};

UIOLMap.displayName = _componentDisplayName;

export default UIOLMap;
