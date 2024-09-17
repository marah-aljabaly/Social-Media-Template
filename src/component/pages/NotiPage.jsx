
export default function NotiPage() {
  return (
    <>
      <div className="container-md">
          <div className="ms-3 me-3 outer" style={{marginTop: 6 +'rem'}}>
            {/* <!-- events --> */}
            <div className="card shadow mb-3 inner">
              <div className="card-body text-center">
                <h4 className="fs-6 mb-3">Upcoming Events:</h4>
                <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="img-fluid w-100" />
                <h3 className="fs-6 mt-4">Holiday</h3>
                <p className="fs-6">Friday 15:00</p>
                <a className="btn btn-secondary opacity-75 w-100 fs-5 p-2 mb-3" style={{borderRadius: 0, position: 'relative', bottom: -1+'rem'}} href="#" role="button">Info</a>
              </div>
            </div>

              {/* <!-- events --> */}
              <div className="card shadow mb-3 inner">
              <div className="card-body text-center">
                <h4 className="fs-6 mb-3">Upcoming Events:</h4>
                <img src="https://www.w3schools.com/w3images/avatar1.png" alt="Avatar" className="img-fluid w-100" />
                <h3 className="fs-6 mt-4">Holiday</h3>
                <p className="fs-6">Friday 15:00</p>
                <a className="btn btn-secondary opacity-75 w-100 fs-5 p-2 mb-3" style={{borderRadius: 0, position: 'relative', bottom: -1+'rem'}} href="#" role="button">Info</a>
              </div>
            </div>
            
          </div>
      </div>
          
    </>
  )
}
