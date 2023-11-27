import {
  WCToast,
  WCToastCloseButton,
  WCToastContent,
  WCToastIcon,
  WCToastItem,
} from 'wc-toast'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wc-toast': React.DetailedHTMLProps<
        React.HTMLAttributes<WCToast>,
        WCToast
      >
      'wc-toast-item': React.DetailedHTMLProps<
        React.HTMLAttributes<WCToastItem>,
        WCToastItem
      >
      'wc-toast-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<WCToastIcon>,
        WCToastIcon
      >
      'wc-toast-content': React.DetailedHTMLProps<
        React.HTMLAttributes<WCToastContent>,
        WCToastContent
      >
      'wc-toast-close-button': React.DetailedHTMLProps<
        React.HTMLAttributes<WCToastCloseButton>,
        WCToastCloseButton
      >
    }
  }
}
