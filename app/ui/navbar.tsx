import CubeScene from "@/app/ui/cube-scene";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <CubeScene />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">KehoeTech</a>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-36 md:w-auto mr-1"
          />
        </div>
      </div>
    </div>
  );
}
