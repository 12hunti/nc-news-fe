import { getUser } from "../api"
import useApiRequest from "../hooks/useApiRequest"
import Loading from "./Loading"
import Error from "./Error"

function UserProfile () {
    const {data: user, isLoading, error} =useApiRequest(getUser, "Falied to load user Profile")

    if (isLoading) {
        return <Loading />;
      }
    
      if (error) {
        return <Error error={error} />;
      }

    const {name, avatar_url} = user

return (<section>
    <h3>Name: {name}</h3>
    <h4>Username: jessjelly</h4>
    <img className="profile-avatar" src={avatar_url} alt="avatar image" />
</section>)
}

export default UserProfile