import React from 'react';
import { wellnessFactors } from './data';
import GuidanceItem from './GuidanceItem';

export default class GuidanceContainer extends React.Component {

    renderItemInfo = () => {
        return (
            <div>
                <h3>Wellness Factors Described</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Image</td>
                            <td>Description</td>
                            <td>Stars</td>
                        </tr>
                    </thead>
                    <tbody>
                    {wellnessFactors.map(factor =>
                            <GuidanceItem key={factor.id} title={factor.title} description={factor.description} stars={factor.stars} image={factor.image}/>                           
                    )}
                           
                    </tbody>
                </table>
            </div>
        )   
    }

    render(){
        return (
            <div>
                <h2> Learn More! </h2>
                {this.renderItemInfo()}
            </div>
        )
    }
}