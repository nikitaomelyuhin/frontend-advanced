import { useDispatch } from 'react-redux';
import { AppDispatchType } from '@/shared/providers/StoreProvider/config/store';

export const useAppDispatch = () => useDispatch<AppDispatchType>();
