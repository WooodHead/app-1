import gql from 'graphql-tag'
import { NodeFields, SubDomainStateFields } from './fragments'

export const GET_WEB3 = gql`
  query web3 {
    web3 @client {
      accounts
      isReadOnly
    }
  }
`

export const GET_PUBLIC_RESOLVER = gql`
  query getPublicResolver {
    publicResolver @client {
      address
    }
  }
`

export const GET_REVERSE_RECORD = gql`
  query getReverseRecord($address: String) @client {
    getReverseRecord(address: $address) @client {
      name
      address
      avatar
      match
    }
  }
`

export const GET_ALL_NODES = gql`
  query names {
    names @client {
      ...NodeFields
    }
  }

  ${NodeFields}
`

export const GET_OWNER = gql`
  query getOwner($name: String) {
    getOwner(name: $name) @client
  }
`

export const GET_TEXT = gql`
  query getText($name: String, $key: String) {
    getText(name: $name, key: $key) @client
  }
`

export const GET_ADDR = gql`
  query getAddr($name: String, $key: String) {
    getAddr(name: $name, key: $key) @client
  }
`

export const GET_SINGLE_NAME = gql`
  query singleName($name: String) {
    singleName(name: $name) @client {
      ...NodeFields
      revealDate
      registrationDate
      migrationStartDate
      currentBlockDate
      transferEndDate
      gracePeriodEndDate
      value
      highestBid
      state
      price
      rent
      referralFeePPM
      available
      expiryTime
      deedOwner
      registrant
      isNewRegistrar
      isDNSRegistrar
      dnsOwner
    }
  }

  ${NodeFields}
`

export const GET_RESOLVER_MIGRATION_INFO = gql`
  query getResolverMigrationInfo($name: String, $resolver: String) {
    getResolverMigrationInfo(name: $name, resolver: $resolver) @client {
      name
      isDeprecatedResolver
      isOldPublicResolver
      isPublicResolverReady
    }
  }
`

export const GET_SUBDOMAINS = gql`
  query getSubDomains($name: String!) @client {
    getSubDomains(name: $name) @client {
      subDomains
    }
  }
`

export const GET_RESOLVER_FROM_SUBGRAPH = gql`
  query getResolverFromSubgraph($id: ID!) {
    domain(id: $id) {
      id
      name
      resolver {
        coinTypes
        texts
      }
    }
  }
`

export const GET_REGISTRANT_FROM_SUBGRAPH = gql`
  query getRegistrantFromSubgraph($id: ID!) {
    registration(id: $id) {
      id
      domain {
        name
      }
      registrant {
        id
      }
    }
  }
`

export const GET_SUBDOMAINS_FROM_SUBGRAPH = gql`
  query getSubdomains($id: ID!) {
    domain(id: $id) {
      id
      labelName
      subdomains {
        id
        labelName
        labelhash
        isMigrated
        name
        owner {
          id
        }
      }
    }
  }
`

export const GET_TRANSACTION_HISTORY = gql`
  query getTransactionHistory {
    transactionHistory @client {
      txHash
      txState
      createdAt
    }
  }
`

export const GET_FAVOURITES = gql`
  query getFavourites {
    favourites @client {
      name
    }
  }
`

export const GET_SUBDOMAIN_FAVOURITES = gql`
  query getSubDomainFavourites {
    subDomainFavourites @client {
      name
    }
  }

  ${SubDomainStateFields}
`

export const GET_ERRORS = gql`
  query getErrors @client {
    error {
      message
    }
  }
`

/* Subgraph only queries */

export const GET_REGISTRATIONS_SUBGRAPH = gql`
  query getRegistrations(
    $id: ID!
    $first: Int
    $skip: Int
    $orderBy: Registration_orderBy
  ) {
    account(id: $id) {
      registrations(first: $first, skip: $skip, orderBy: $orderBy) {
        expiryDate
        domain {
          labelName
          labelhash
          name
          isMigrated
          parent {
            name
          }
        }
      }
    }
  }
`

export const GET_DOMAINS_SUBGRAPH = gql`
  query getDomains(
    $id: ID!
    $first: Int
    $skip: Int
    $orderBy: Domain_orderBy
  ) {
    account(id: $id) {
      domains(first: $first, skip: $skip, orderBy: $orderBy) {
        labelName
        labelhash
        name
        isMigrated
        parent {
          name
        }
      }
    }
  }
`

/* Permanent Registrar */

export const GET_RENT_PRICE = gql`
  query getRentPrice($label: String, $duration: Number) {
    getRentPrice(label: $label, duration: $duration) @client
  }
`

export const GET_RENT_PRICES = gql`
  query getRentPrices($labels: String, $duration: Number) {
    getRentPrices(labels: $labels, duration: $duration) @client
  }
`

export const GET_MINIMUM_COMMITMENT_AGE = gql`
  query getMinimumCommitmentAge {
    getMinimumCommitmentAge @client
  }
`

/* Registry Migration */

export const CAN_WRITE = gql`
  query canWrite($name: String, $account: String) {
    canWrite(name: $name, account: $account) @client
  }
`

export const IS_MIGRATED = gql`
  query isMigrated($name: String) {
    isMigrated(name: $name) @client
  }
`

export const IS_CONTRACT_CONTROLLER = gql`
  query isContractController($address: String) {
    isContractController(address: $address) @client
  }
`
