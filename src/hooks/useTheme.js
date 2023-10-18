import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../slices/themeSlice';

export const useTheme = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return { isDarkMode, toggle };
};
