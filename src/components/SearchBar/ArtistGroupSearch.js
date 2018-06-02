//Currently the default off semantic UI's page. Make intelligent afterwards.

import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'

const getResults = () => _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

const source = _.range(0, 3).reduce((memo) => {
  const name = faker.hacker.noun()

  memo[name] = { // eslint-disable-line no-param-reassign
    name,
    results: getResults(),
  }

  return memo
}, {})

export default class ArtistGroupSearch extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      const filteredResults = _.reduce(source, (memo, data, name) => {
        const results = _.filter(data.results, isMatch)
        if (results.length) memo[name] = { name, results } // eslint-disable-line no-param-reassign

        return memo
      }, {})

      this.setState({
        isLoading: false,
        results: filteredResults,
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state
    //In order to change up whats happening with the actual searchbar. Please refer to Input component
    //in documentation and add to the prop being passed below. Fluid makes it fill parent for example
    return (
          <Search
            category
            fluid
            input = {{fluid: true}}
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
            
          />
      
    )
  }
}