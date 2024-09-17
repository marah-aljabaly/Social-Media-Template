// import MainFooter from "../ui/layout/MainFooter";
// import MainHeader from "../ui/layout/MainHeader";


export default function RequistPage() {
  return (
   <>
      <div className="container-md  mt-5 mb-5">
        <div className="ms-3 me-3 outer" style={{marginTop: 5 +'rem'}}>
          {/* <!-- request1 --> */}
          <div className="card shadow mb-3 inner" style={{marginTop: 2 +'rem'}}>
            <div className="card-body text-center">
              <p className="fs-6 mb-3">Friend Request</p>
              <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="img-fluid w-50" />
              <p className="fs-5">Jane Doe</p>
              <a className="btn btn-success opacity-75 w-100 fs-5 p-2 mb-3" style={{borderRadius: 0, position: 'relative', bottom: -1+'rem'}} href="#" role="button">Accept</a>
              <a className="btn btn-danger opacity-75 w-100 fs-5 p-2 mb-3" style={{borderRadius: 0, position: 'relative', bottom: -1+'rem'}} href="#" role="button">Delete</a>
            </div>
          </div>

          {/* <!-- request2 --> */}
          <div className="card shadow mb-3 inner" style={{marginTop: 2 +'rem'}}>
            <div className="card-body text-center">
              <p className="fs-6 mb-3">Friend Request</p>
              <img src="https://www.w3schools.com/w3images/avatar1.png" alt="Avatar" className="img-fluid w-50" />
              <p className="fs-5">Jane Doe</p>
              <a className="btn btn-success opacity-75 w-100 fs-5 p-2 mb-3" style={{borderRadius: 0, position: 'relative', bottom: -1+'rem'}} href="#" role="button">Accept</a>
              <a className="btn btn-danger opacity-75 w-100 fs-5 p-2 mb-3" style={{borderRadius: 0, position: 'relative', bottom: -1+'rem'}} href="#" role="button">Delete</a>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
