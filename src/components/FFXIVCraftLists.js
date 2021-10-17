import React from 'react';

class CraftList extends React.Component {
    render() {
        return (
            <div>  {/*main don't move */}
                <h1>Select items here</h1>
            
            <div class="checklist">
                <label><input type="checkbox" name="listOfItemsNeeded"> list of items needed</label>
                <label><input type="checkbox" name="listOfItemsNeeded"> list of items needed2</label>
                <label><input type="checkbox" name="listOfItemsNeeded"> list of items needed3</label>
                <label><input type="checkbox" name="listOfItemsNeeded"> list of items needed4</label>
                <label><input type="checkbox" name="listOfItemsNeeded"> list of items needed5</label>
                <input type="submit" value="Submit">
                </div>
            </div>  /*main don't move */
        );
    }
}

export default CraftList;
