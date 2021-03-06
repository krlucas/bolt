// import { Preact, h } from 'preact';
const Watch = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...otherProps}>
      <title>Icon/utility/Indigo/24px/Watch</title>
      <g fill="currentColor" fill-rule="evenodd">
        <path
          d="M0,64a64,64 0 1,0 128,0a64,64 0 1,0 -128,0"
          class="c-bolt-icon--background c-bolt-icon--circle-background"
          fill="none"
        />
        <g fill-rule="nonzero" fill="currentColor">
          <path d="M20 12c0-2.288-.963-4.35-2.506-5.813l-.319-3.469a2.987 2.987 0 0 0-2.988-2.719H9.831A2.998 2.998 0 0 0 6.843 2.73l-.312 3.438a7.987 7.987 0 0 0-.012 11.656l.319 3.456a2.987 2.987 0 0 0 2.988 2.719h4.344a2.994 2.994 0 0 0 2.988-2.731l.312-3.438a7.966 7.966 0 0 0 2.531-5.831L20 12zM8.838 2.913a.998.998 0 0 1 .994-.912h4.356c.519 0 .95.387.994.9l.169 1.831a8 8 0 0 0-3.35-.731 8.014 8.014 0 0 0-3.331.725l.169-1.812-.001-.001zM6 12c0-1.831.825-3.481 2.125-4.581l.012-.012a6.013 6.013 0 0 1 3.862-1.406c3.306 0 6 2.694 6 6s-2.694 6-6 6a6.01 6.01 0 0 1-6-6L6 12zm9.162 9.087a.998.998 0 0 1-.994.912H9.824a.989.989 0 0 1-.994-.906l-.169-1.831a7.965 7.965 0 0 0 3.338.731 8.034 8.034 0 0 0 3.331-.725l-.169 1.819h.001z" />
          <path d="M12.794 14.206a.999.999 0 0 0 1.412 0 1.005 1.005 0 0 0 0-1.413L13 11.587V8.999c0-.55-.45-1-1-1s-1 .45-1 1v3a1 1 0 0 0 .294.706l1.5 1.5v.001z" />
        </g>
      </g>
    </svg>
  );
};
export default Watch;
