interface ScrollHandlerArgs {
  onScrollEnd: () => void;
}

export default class ScrollHandler {
  removeHandler: () => void = null;
  onScrollEnd: () => void;

  constructor(args: ScrollHandlerArgs) {
    this.onScrollEnd = args.onScrollEnd;
  }

  attach() {
    this.detach();

    const handler = () => {
      if (document.body.getBoundingClientRect().height === window.scrollY + window.innerHeight) {
        this.onScrollEnd();
      }
    }

    window.addEventListener('scroll', handler)

    this.removeHandler = () => {
      window.removeEventListener('scroll', handler);
      this.removeHandler = null;
    }
  }

  detach() {
    if (!this.removeHandler) {
      return;
    }

    this.removeHandler()
  }
}