import React from 'react'

function Docs(props) {
    return (
        <div className="container-fluid  bg-dark ">
            <div className="card bg-dark text-light text-center border-secondary p-0">
                <div className="card-header">
                    <h3>Hangarize Docs</h3>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Actual Hangar</div>

                        <div className="card-body">
                            Every new hangar created in the Hangarizer is a copy
                            of your Actual Hangar including the Buyback section
                            of your Actual Hangar. Changes to your Actual Hangar
                            are not propogated to previously existing hangars,
                            only to hangars created after the changes. Don't
                            forget to update you Hangar Total (if you intend to
                            take advantage of the money management features,
                            it's not required though )
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Hangar Total</div>

                        <div className="card-body">
                            Click the numbers in hangar Total to save a total
                            value The app calculates the price of everything in
                            your Actual Hangar (excluding buyback items) as you
                            build the hangar. This calculated price appears as a
                            placeholder (grey text) in the Hangar Total. Once an
                            actual total is added, the Total is displayed in
                            light-colored text. Credit is calculated
                            automatically. If your SC Account currently has
                            store credit, simply enter an amount in Hangar Total
                            over the calculated grey-text suggestion. eg. if you
                            have 10 dollars store credit on your account and
                            your actual hangar has $140 worth of things, enter
                            $150 for total in your actual hangar.
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Pack Creation</div>

                        <div className="card-body">
                            <ul className="list-group bg-dark text-light">
                                <li className="list-group-item bg-dark text-light p-1">
                                    In the Packs section, use the green "Plus"
                                    button to access the Pack Creation Form
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Create the Pack, filling in applicable
                                    information on the form.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    In the Packs section, click on the Pack you
                                    just created to access the pack internals.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Add Ships and any additional Items to the
                                    Pack. When adding Ships, try to always click
                                    the suggested ship if it exists. Ships that
                                    don't have a suggestion can be added but
                                    info like manufacturer and role won't be
                                    available.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Ship Creation</div>

                        <div className="card-body">
                            <ul className="list-group bg-dark text-light">
                                <li className="list-group-item bg-dark text-light p-1">
                                    In the Ships section, use the green "Plus"
                                    button to access the Ship Creation Form
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Create the Ship, filling in applicable
                                    information on the form.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    In the Ships section, you can click on the
                                    Ship to access ship internals if you need to
                                    add additional items.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">CCU Creation</div>

                        <div className="card-body">
                            <ul className="list-group bg-dark text-light">
                                <li className="list-group-item bg-dark text-light p-1">
                                    In the CCUs section, use the green "Pluss"
                                    button to access the CCU Creation Form
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Create the CCU, filling in the applicable
                                    information on the form.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Item Creation</div>

                        <div className="card-body">
                            <ul className="list-group bg-dark text-light">
                                <li className="list-group-item bg-dark text-light p-1">
                                    In the Items section, use the green "Plus"
                                    button to access the Item Creation Form
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Create the Item using the form, don't forget
                                    to designate whether the item is meltable or
                                    not. Using non meltable items is a good way
                                    to keep track of items like subscriptions or
                                    Citcon tickets that you have bought on your
                                    SC account but are not able to melt for
                                    store credit. This is not required but it
                                    helps eyeball whether your account total and
                                    store credit in the Hangarize app are
                                    accurate to the amounts in your SC account
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Melting</div>

                        <div className="card-body">
                            <ul className="list-group bg-dark text-light">
                                <li className="list-group-item bg-dark text-light p-1">
                                    In the Main hangar categories (not Buyback)
                                    Click on the thing you want to melt
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Click the credit-card button.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    If an upgraded ship or a pack containing
                                    upgraded ships is melted, the upgrade is
                                    removed. (This is how it works on your
                                    official account also)
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Melting within the Actual Hangar should be
                                    done with caution. If you have input a total
                                    for your Actual Hangar, and then melt
                                    something, your credit will reflect the
                                    melt. If you did not intend to melt the item
                                    you should re-input the correct total. You
                                    can always empty the input feild to see the
                                    suggested total in grey text.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Buying Back</div>

                        <div className="card-body">
                            In the Buyback section, click on the thing you want
                            to buy back and click the credit-card button.
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Upgrading</div>

                        <div className="card-body">
                            <ul className="list-group bg-dark text-light">
                                <li className="list-group-item bg-dark text-light p-1">
                                    Click on the ship to expand it's internals
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Click the Hammer button and enter the
                                    information in the form. Always click the
                                    suggestion for the ship you are trying to
                                    enter if a suggestion exists. Only enter the
                                    price that the upgrade costs, not the cost
                                    of the ship you are upgrading to.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Adding a New hangar</div>

                        <div className="card-body">
                            In the Hangarizer, type a name for the new hangar
                            into the text input field at the top of the page.
                            Then hit Enter or click the green "OK" button next
                            to the input field
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Deleting a Hangar</div>

                        <div className="card-body">
                            <ul className="list-group bg-dark text-light">
                                <li className="list-group-item bg-dark text-light p-1">
                                    In the Hangarizer, select the hangar you
                                    want to delete from the list of hangars.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    In the Hangar Control Bar (where
                                    total/credit and the hangar name appear),
                                    Click the Red Lock Button to unlock delete
                                    capability.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Click the Trash Can Button that appears in
                                    the Hangar Control Bar.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Confirm you want to delete the hangar by
                                    clicking the green OK confirmation button.
                                    This is a three-step process because it is
                                    irreversible.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">
                            Deleting Packs, Ships, Items, CCUs
                        </div>

                        <div className="card-body">
                            <ul className="list-group bg-dark text-light">
                                <li className="list-group-item bg-dark text-light p-1">
                                    In the corresponding hangar section, click
                                    the Red Lock Button to unlock the delete
                                    function. To delete ships that reside within
                                    Packs, use the Packs section Lock Button,
                                    not the Ships section Lock Button.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Click to expand the thing you want to
                                    delete.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Click the trash can button on the thing you
                                    want to delete.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    Remember to Click the Red Lock Button again
                                    when you are done deleting to lock the
                                    delete function again. This prevents
                                    accidental deletion, because deletion is
                                    irreversible.
                                </li>
                                <li className="list-group-item bg-dark text-light p-1">
                                    When working in the Hangarizer (not in your
                                    Actual Hangar), deleting should ONLY be done
                                    to fix errors as it will affect your credit
                                    calculation. If you delete something from a
                                    Hangarizer hangar you should always adjust
                                    that hangar's total to reflect the change.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">Buyback Filters</div>

                        <div className="card-body">
                            Because buyback sections can contain a lot of
                            things, you can filter it by Packs, Ships, CCUs, or
                            Items. Just click on the button of that name. To
                            clear the filter and view everything just click on
                            the funnel Icon at the left of the filter menu.
                        </div>
                    </div>
                    <div className="card bg-dark text-light text-left border-secondary p-0 m-1">
                        <div className="card-header">
                            Hangarizer Hangar List :
                        </div>

                        <div className="card-body">
                            {
                                'The Hangar list displays a "page" of 5 hangars at a time.  The < and > buttons move betweeen pages one at a time.  The << and >> buttons jump to the first or last page.  The List can be sorted Alphabetically by hangar name (the Az Button) or Historically by the date/time the hangar was created (the # Button).  You can choose ascending or descending sort order with the up/down arrow button at the left of the hangar list menu bar.'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Docs
