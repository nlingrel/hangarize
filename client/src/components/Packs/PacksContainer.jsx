import React from 'react'
import CategoryContainer from '../Generic/CategoryContainer'
import AddPackForm from '../Forms/AddPackForm'
import PackContainer from '../Packs/PackContainer'
//PacksContainer -> [PackContainer] -> [PackShips, PackItems, PackExtras]
function PacksContainer(props) {
    const items = props.packs.map((pack, i) => {
        return (
            <PackContainer
                key={i}
                packId={pack.id}
                name={pack.name}
                ships={pack.ships}
                items={pack.items}
                price={pack.price}
                number={i}
                addShipToPack={props.addShipToPack}
                addItemToPack={props.addItemToPack}
                addItemToShip={props.addItemToShip}
                removePackFromHangar={props.removePackFromHangar}
            />
        )
    })
    return (
        <CategoryContainer
            items={items}
            name={'Packs'}
            form={
                <AddPackForm
                    name={'Packs'}
                    addNewPackToHangar={props.addNewPackToHangar}
                    trayPacks={props.packs}
                />
            }
        />
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
