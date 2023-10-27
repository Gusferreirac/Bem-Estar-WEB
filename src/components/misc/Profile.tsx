interface userName{
    name: string;
}

const Profile = (props: userName) => {
    return(
       <>
        <p className="m-auto">{props.name}</p>
       </>
    );
}  

export default Profile;