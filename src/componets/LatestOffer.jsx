import React from 'react'
import Sliders from './partials/Sliders'

export default function LatestOffer() {
  return (
    <>
    <div className="container">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="letest-offer ">
                        <h1 className='text-center text-uppercase me-5'>Latest Offers</h1>
                        <p>Discover exclusive stays and exceptional experiences at our elegantly designed hotel near Delhi Airport.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Sliders/>
    </>
  )
}
