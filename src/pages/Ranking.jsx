import React, { useState } from 'react';
import PropTypes from 'prop-types';

import img1 from '../assets/images/ranking/ranking-1.png'
import img2 from '../assets/images/ranking/ranking-2.png'
import img3 from '../assets/images/ranking/ranking-3.png'
import img4 from '../assets/images/ranking/ranking-4.png'

import { Link } from 'react-router-dom';

Ranking.propTypes = {

};

function Ranking(props) {

    const [dataRanking] = useState([
        {
            id: 1,
            img: img1,
            name: ' 0x657888B7eCBEF11bb4c446C6a1d61FF979468c70',
            volume: '12',
        },
        {
            id: 2,
            img: img1,
            name: ' 0x657888B7eCBEF11bb4c446C6a1d61FF979468c70',
            volume: '10',

        },

    ])
    return (
        <div>

            <section className="tf-page-title ">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">

                            <ul className="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li>Ranking</li>
                            </ul>
                            <h4 className="page-title-heading">Ranking</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-ranking tf-filter overflow-d">
                <div className="tf-container">
                    <div className="table-ranking">
                        <div className="title-ranking">
                            <div className="col-ranking">#</div>
                            <div className="col-ranking">Address</div>
                            <div className="col-ranking">TotalRef</div>

                        </div>
                    </div>
                    <div className="table-ranking tf-filter-container">

                        {
                            dataRanking.map(idx => (
                                <div key={idx.id} className="content-ranking tf-loadmore 3d anime music">
                                    <div className="col-ranking">{idx.id}</div>
                                    <div className="col-ranking"><div className="image"><img src={idx.img} alt="SplitingMe" /><div className="icon"><i className="fas fa-check"></i></div></div> {idx.name}</div>
                                    <div className="col-ranking">{idx.volume}</div>
                                </div>
                            ))
                        }


                    </div>
                    <div className="col-md-12">
                        <div className="tf-pagination">
                            <Link to="#" className="tf-button active">1-25</Link>
                            <Link to="#" className="tf-button">25-35</Link>
                            <Link to="#" className="tf-button ">35-50</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Ranking;