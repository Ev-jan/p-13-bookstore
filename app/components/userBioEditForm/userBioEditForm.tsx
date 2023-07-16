
import { UserBioInput } from "./style";
import { selectUserBio, useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setUserBio } from "../../redux/features/user/user";



const UserBioEditForm: React.FC = () => {

    const dispatch = useAppDispatch();
    const bio = useAppSelector(selectUserBio);
    const maxInputLength = 500

    const handleBioInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        dispatch(setUserBio(value));
    };


    return (
        <>
        <UserBioInput maxLength={maxInputLength} onChange={handleBioInputChange} value={bio} id="userBioInput" />
        <div><span>{bio && bio.length}</span>/<span>{maxInputLength}</span></div>
        </>
    )
    
}

export default UserBioEditForm