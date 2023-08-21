import React from 'react'

const Nav = () => {
  return (
    <div>
      {/* <!-- Pills navs --> */}
      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
          <Link
            class="nav-link active"
            id="tab-login"
            href=""
          >
            Login
          </Link>
        </li>
        <li class="nav-item" role="presentation">
          <Link
            class="nav-link"
            id="tab-register"
            href=""
          >
            Register
          </Link>
        </li>
      </ul>
      {/* <!-- Pills navs --> */}
    </div>
  )
}

export default Nav
