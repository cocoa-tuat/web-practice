import React from 'react';

class News extends React.Component {
    render() {
        return(
            <div className= 'news'>
                <h1>News</h1>
                <div class="info">
                <dl>
                    <dt>2021.05.27</dt>
                    <dd>お知らせの内容が入ります。お知らせの内容が入ります。</dd>
                </dl>
                <dl>
                    <dt>2021.04.02</dt>
                    <dd>新着情報の内容が入ります。新着情報の内容が入ります。</dd>
                </dl>
                <dl>
                    <dt>2021.03.01</dt>
                    <dd>お知らせの内容が入ります。お知らせの内容が入ります。</dd>
                </dl>
                <dl>
                    <dt>2021.01.02</dt>
                    <dd>新着情報の内容が入ります。新着情報の内容が入ります。</dd>
                </dl>
                <dl>
                    <dt>2020.12.01</dt>
                    <dd>お知らせの内容が入ります。お知らせの内容が入ります。</dd>
                </dl>
                <dl>
                    <dt>2020.11.02</dt>
                    <dd>新着情報の内容が入ります。新着情報の内容が入ります。</dd>
                </dl>
                </div>
            </div>
        )

    }
}

export default News;
