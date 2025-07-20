import { Link, Outlet, NavLink } from "react-router-dom";

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="profiles-cont">
      {profiles.map((profile) => (
        <NavLink key={profile} to={`/profiles/${profile}`}>
          {" "}
          Profile {profile}{" "}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
}
