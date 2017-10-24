// import { Preact, h } from 'preact';
const Healthcare = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...otherProps}>
      <title>Icon/Industry/Healthcare</title>
      <path
        d="M16 28.39C9.805 23.17 2 15.256 2 12c0-2.405.585-8 6-8 2.114 0 5.568 2.396 6.576 3.42L16 8.86l1.424-1.442C18.433 6.396 21.886 4 24 4c5.415 0 6 5.595 6 8 0 .153-.023.32-.056.493H24.38l-2.467-2.419a.976.976 0 0 0-.414-.456 1.013 1.013 0 0 0-.596-.123l-.033.005a.963.963 0 0 0-.453.172c-.007.006-.016.01-.024.016-.028.021-.052.046-.078.07-.024.023-.05.043-.07.067-.009.01-.015.02-.023.03-.031.039-.063.077-.088.12l-3.191 6.43-1.87-3.445c-.232-.343-.675-.516-1.107-.467H9a1 1 0 1 0 0 2h4.466l2.46 4.533c.23.341.67.514 1.101.468a1 1 0 0 0 .84-.483l.02-.041c0-.003.002-.005.003-.007l3.387-6.825 1.826 1.79a.995.995 0 0 0 .793.555l.04.004c.022.001.042.006.064.006h5.113C26.898 18.353 20.939 24.227 16 28.39M24 2c-3 0-7 3-8 4.013C15 5 11 2 8 2 2.477 2 0 6.478 0 12c0 6 16 18.985 16 18.985S32 18 32 12c0-5.522-2.477-10-8-10"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  );
};
export default Healthcare;