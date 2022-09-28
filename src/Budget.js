import React from 'react'
import './Budget.css'

const Budget = () => {
    return (
        <div className="outline">
            <div>
                <h1 className='text-center'>Zen Budget Planner</h1>
                <div className="align">
                    <div className="card1"><h3 className="text">Budget: &nbsp;₹ 30000</h3></div>
                    <div className="card2"><h3 className="text1">Budget: &nbsp;₹ 30000</h3></div>
                    <div className="card3"><h3 className="text2">Budget: &nbsp;₹ 30000</h3></div>
                </div>
                <div>
                    <h3>Expenses</h3>
                    <div className="table">
                        <div>Shopping</div>
                        <div className=' '>50</div>
                    </div>
                    <div className="table">
                    <div>Holiday</div>
                        <div className=''>300</div>
                    </div>
                    <div className="table">
                    <div>Trasportation</div>
                        <div className=''>70</div>
                    </div>
                    <div className="table">
                    <div>Fuel</div>
                        <div className=' '>500</div>          
                    </div>
                    <div className="table">
                    <div>Fuel</div>
                        <div className=''>40</div>          
                    </div>
                    <div className="table">
                    <div>Child Care</div>
                        <div className=''>500</div>          
                    </div>
                </div>
                <div>
                    <h3>New Expenses</h3>
             <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name/"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name/"/>
    </div>
  </div>
  <button type='submit' className='bg-primary mt-2'>Save</button>
</form>
                </div>
            </div>
        </div>
    )
}

export default Budget