import React from 'react'
import './Catalog.css'
import Group from './Group'
import Card from '../Components/Card'

class Catalog extends React.Component {

    state = {
        groupOptions: [],
        group: "",
        cardsArray: [],
        cardOffset: 0
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${process.env.REACT_APP_BEARER_TOKEN}`
            }
        }
        fetch('https://api.tcgplayer.com/catalog/categories/1/groups?limit=50', options)
            .then(resp => resp.json())
            .then(this.renderOptions)
    }

    renderOptions = (groups) => {
        groups = groups.results
        let groupOptionsArray = groups.map(group => <option name="group" value={group.groupId}>{group.name}</option>)
        this.setState(() => ({ groupOptions: groupOptionsArray }))
    }

    changeHandler = (e) => {
        e.persist()
        this.setState(() => ({
            group: e.target.value,
            cardOffset: 0
        }), () => this.fetchCards())
    }

    fetchCards = () => {
        const options = {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${process.env.REACT_APP_BEARER_TOKEN}`
            }
        }

        fetch(`https://api.tcgplayer.com/catalog/products?categoryId=1&productTypes=Cards&groupId=${this.state.group}&offset=${this.state.cardOffset}&limit=100`, options)
            .then(resp => resp.json())
            .then(this.renderCards)
    }

    renderCards = (cards) => {
        cards = cards.results.map(cardObj => <Card card={cardObj} />)
        // console.log(cards.length)
        this.setState(() => ({ cardsArray: cards }))
    }

    moreCards = () => {
        this.setState((previousState) => ({ cardOffset: previousState.cardOffset += 50 }), this.fetchCards())
    }
    lessCards = () => {
        this.setState((previousState) => ({ cardOffset: previousState.cardOffset -= 50 }), this.fetchCards())
    }

    render() {
        return (
            <>
                <h1>Catalog</h1>
                <select onChange={this.changeHandler}>
                    {this.state.groupOptions.length === 0 ? <option value="">Loading...</option> : this.state.groupOptions}
                </select>
                <button id="previous-page" onClick={this.lessCards}>Previous</button>
                <button id="next-page" onClick={this.moreCards}>Next</button>
                <div className="container">
                    {this.state.cardsArray}
                </div>
            </ >
        )
    }
}

export default Catalog