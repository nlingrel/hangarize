import React from 'react'
import PackButton from './PackButton'
import PackBody from './PackBody'

function PacksContainer(props) {
    const buttons = props.packs.map((pack, i) => {
        return (
            <PackButton
                key={i}
                name={pack.name}
                number={i}
                price={pack.price}
                id={pack._id}
            />
        )
    })
    const bodies = props.packs.map((pack, i) => {
        return (
            <PackBody
                key={i}
                ships={pack.ships}
                items={pack.items}
                name={pack.name}
                id={pack._id}
                number={i}
                price={pack.price}
            />
        )
    })
    return (
        <div className="card">
            <div className="card-header">Packs</div>
            <div className="card-body">
                <h5 className="card-title">
                    <div className="form-inline">{buttons}</div>
                </h5>

                <div className="container">{bodies}</div>
            </div>
        </div>
    )
}

export default PacksContainer

{
    /* <p>
  <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample2">
      <div className="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div> */
}
