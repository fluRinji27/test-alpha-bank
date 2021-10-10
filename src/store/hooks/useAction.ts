import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../actions-creators'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}