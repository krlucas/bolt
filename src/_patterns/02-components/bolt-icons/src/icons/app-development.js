// import { Preact, h } from 'preact';
const AppDevelopment = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...otherProps}>
      <title>Icon/product/Platform/App-development</title>
      <path
        d="M29 9H3V4a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v5zm0 19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11h26v17zm1-27H2a1 1 0 0 0-1 .999V30a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V1.999A1 1 0 0 0 30 1zM9 7h2V5H9v2zm4 0h2V5h-2v2zM5 7h2V5H5v2zm10 18h2v-4h4v-2h-4v-4h-2v4h-4v2h4v4z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  );
};
export default AppDevelopment;
