import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';

export default function Mhome() {
  return (
    <> 
      <main className="ps-3 pe-2">
        {/* <!-- Profile Section --> */}
        <div className="container-md profile">
          <div className="row">
            <div>
              {/* <!-- my profile --> */}
              <div className="card shadow">
                <div className="card-body text-center">
                  <h2 className="pb-2 fs-5">My Profile</h2>
                  <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="rounded-circle img-fluid" width="85rem" />
                  <hr />
                  <p className="text-start fs-6">Designer, UI</p>
                  <p className="text-start fs-6">London, UK</p>
                  <p className="text-start fs-6">April 1, 1988</p>
                </div>
              </div>
        
              {/* Accordion */}
              <Accordion className="mt-2 mb-3 shadow">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>My Groups</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet,
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>My Events</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet,
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>My Photos</Accordion.Header>
                  <Accordion.Body>
                    <img src="https://www.w3schools.com/w3images/avatar1.png" className="mb-2 w-100" alt="" />
                    <img src="https://www.w3schools.com/w3images/avatar1.png" className="w-100" />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* <!-- interest --> */}
              <div className="card mb-4 rounded-1 shadow interest" style={{display: 'none'}}>
                <div className="card-body">
                  <div className="card-title fs-5 mb-2">
                    Interests
                  </div>
                  <div className="card-text">
                    <span className="badge text-bg-dark rounded-0 p-1">News</span>
                    <span className="badge text-bg-dark opacity-75 rounded-0 p-1">W3Schools </span>
                    <span className="badge text-bg-dark rounded-0 p-1">Labels</span>
                    <span className="badge text-bg-dark opacity-75 rounded-0 p-1">Games</span>
                    <span className="badge text-bg-dark rounded-0 p-1">Friends</span>
                    <span className="badge text-bg-dark opacity-75 rounded-0 p-1">Games</span>
                    <span className="badge text-bg-dark rounded-0 p-1">Friends</span>
                    <span className="badge text-bg-dark opacity-75 rounded-0 p-1">Food</span>
                    <span className="badge text-bg-dark rounded-0 p-1">Design</span>
                    <span className="badge text-bg-dark opacity-75 rounded-0 p-1">Art</span>
                    <span className="badge text-bg-dark rounded-0 p-1">Photos</span>
                  </div>
                </div>
              </div>

              {/* <!-- alert --> */}
              <Alert variant="secondary" dismissible style={{display: 'none'}}>
              <Alert.Heading><strong>Hey!!</strong></Alert.Heading>
              <p>
              People are looking at your profile. Find out who.
              </p>
              </Alert>
            </div>
          </div>
        </div>

        {/* <!-- postes Section --> */}
        <div className="container">
          <div className="ms-2 me-2">
            {/* <!-- post anything --> */}
            <div className="mb-3">
              <div className="card rounded-1 shadow">
                <div className="card-body">
                  <h6 className="card-title text-secondary pb-1">Socil media platform by marah</h6>
                  <input type="text" value="Status: Feeling Blue" className="border ps-3 pb-1 pt-1 w-100" readOnly/>
                  <button className="btn btn-dark rounded-0 mt-3 pe-4 ps-4 pb-2 pt-2">Post</button>
                </div>
              </div>
            </div>
            {/* <!-- post1 --> */}
            <div className="mb-3">
              <div className="card rounded-1 shadow">
                <div className="card-body ps-3">
                  <div className="top position-relative" >
                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" className="img-fluid rounded-circle p-2" width="80rem" />
                    <span className="pe-4 fs-5">John Doe</span>
                    <span className="text-secondary pe-3 pt-2" style={{position: 'absolute', right:0}}>1 min</span>
                  </div>
                  <div className="">
                    <hr />
                    <p className="card-text ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi velit voluptatum, maxime ipsa corrupti fugiat repudiandae recusandae repellendus dignissimos ipsam in placeat eos architecto voluptatem, illo esse consequatur. Beatae, dolor!</p>
                    <div className="row pt-1 pb-2">
                      <img src="https://www.w3schools.com/w3images/avatar1.png" className="img-fluid w-50" alt="Work 1" />
                      <img src="https://www.w3schools.com/w3images/avatar1.png" className="img-fluid w-50" alt="Work 1" />
                    </div>
                    <button className="btn btn-dark rounded-0 mt-3 me-2 ps-4 pe-4 pt-2 pb-2">Like</button>
                    <button className="btn btn-dark rounded-0 mt-3 me-2 ps-4 pe-4 pt-2 pb-2">Comment</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- post2 --> */}
            <div className="mb-3">
              <div className="card rounded-1 shadow">
                <div className="card-body ps-3">
                  <div className="top position-relative" >
                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" className="img-fluid rounded-circle p-2" width="80rem" />
                    <span className="pe-4 fs-5">John Doe</span>
                    <span className="text-secondary pe-3 pt-2" style={{position: 'absolute', right: 0}}>1 hr</span>
                  </div>
                  <div>
                    <hr />
                    <p className="card-text ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi velit voluptatum, maxime ipsa corrupti fugiat repudiandae recusandae repellendus dignissimos ipsam in placeat eos architecto voluptatem, illo esse consequatur. Beatae, dolor!</p>
                    <button className="btn btn-dark rounded-0 mt-3 me-2 ps-4 pe-4 pt-2 pb-2">Like</button>
                    <button className="btn btn-dark rounded-0 mt-3 me-2 ps-4 pe-4 pt-2 pb-2">Comment</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- post3 --> */}
            <div className="mb-3">
              <div className="card rounded-1 shadow">
                <div className="card-body ps-3">
                  <div className="top position-relative" >
                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" className="img-fluid rounded-circle p-2" width="80rem" />
                    <span className="pe-4 fs-5">John Doe</span>
                    <span className="text-secondary pe-3 pt-2" style={{borderRadius: 0, position: 'absolute', right: 0}}>1 min</span>
                  </div>
                  <div className="">
                    <hr />
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi velit voluptatum, maxime ipsa corrupti fugiat repudiandae recusandae repellendus dignissimos ipsam in placeat eos architecto voluptatem, illo esse consequatur. Beatae, dolor!</p>
                    <img src="https://www.w3schools.com/w3images/avatar1.png" alt="Work 1"  className="img-fluid d-block w-100" />
                    <button className="btn btn-dark rounded-0 mt-3 me-2 ps-4 pe-4 pt-2 pb-2">Like</button>
                    <button className="btn btn-dark rounded-0 mt-3 me-2 ps-4 pe-4 pt-2 pb-2">Comment</button>
                  </div>
                </div>
              </div>
            </div>
          </ div>
        </ div>

        {/* <!-- right Section --> */}
        <div className="container-md right">
          <div className="row">
            <div>
              {/* <!-- events --> */}
              <div className="card shadow mb-3">
                <div className="card-body text-center">
                  <h4 className="fs-6 mb-3">Upcoming Events:</h4>
                  <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="img-fluid w-100" />
                  <h3 className="fs-6 mt-4">Holiday</h3>
                  <p className="fs-6">Friday 15:00</p>
                  <a className="btn btn-secondary opacity-75 w-100 fs-5 p-2 mb-3" style={{borderRadius: 0, position: 'relative', bottom: -1+'rem'}} href="#" role="button">Info</a>
                </div>
              </div>
              {/* <!-- request --> */}
              <div className="card shadow mb-3">
              <div className="card-body text-center">
                <p className="fs-6 mb-3">Friend Request</p>
                <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="img-fluid w-50" />
                <p className="fs-5">Jane Doe</p>
                <a className="btn btn-success opacity-75 w-100 fs-5 p-2 mb-3" style={{borderRadius: 0, position: 'relative', bottom: -1+'rem'}} href="#" role="button">Accept</a>
                <a className="btn btn-danger opacity-75 w-100 fs-5 p-2 mb-3" style={{borderRadius: 0, position: 'relative', bottom: -1+'rem'}} href="#" role="button">Delete</a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
