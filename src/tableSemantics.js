import React from 'react'
import { Icon, Table, Button } from 'semantic-ui-react'

const TableExampleStructured = () => (
  <Table celled structured>
    <Table.Header>
      <Table.Row>
        {/* <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell> */}
        {/* <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell> */}
        <Table.HeaderCell rowSpan='2'>Nurse_id</Table.HeaderCell>
        <Table.HeaderCell colSpan='3' textAlign='center'>Monday</Table.HeaderCell>
        <Table.HeaderCell colSpan='3' textAlign='center'>Tuesday</Table.HeaderCell>
        <Table.HeaderCell colSpan='3' textAlign='center'>Wednesday</Table.HeaderCell>
        <Table.HeaderCell colSpan='3' textAlign='center'>Thursday</Table.HeaderCell>
        <Table.HeaderCell colSpan='3' textAlign='center'>Friday</Table.HeaderCell>
        <Table.HeaderCell colSpan='3' textAlign='center'>Saturday</Table.HeaderCell>
        <Table.HeaderCell colSpan='3' textAlign='center'>Sunday</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        
        <Table.HeaderCell>Morning</Table.HeaderCell>
        <Table.HeaderCell>Afternoon</Table.HeaderCell>
        <Table.HeaderCell>Night</Table.HeaderCell>
        
        <Table.HeaderCell>Morning</Table.HeaderCell>
        <Table.HeaderCell>Afternoon</Table.HeaderCell>
        <Table.HeaderCell>Night</Table.HeaderCell>

        <Table.HeaderCell>Morning</Table.HeaderCell>
        <Table.HeaderCell>Afternoon</Table.HeaderCell>
        <Table.HeaderCell>Night</Table.HeaderCell>

        <Table.HeaderCell>Morning</Table.HeaderCell>
        <Table.HeaderCell>Afternoon</Table.HeaderCell>
        <Table.HeaderCell>Night</Table.HeaderCell>

        <Table.HeaderCell>Morning</Table.HeaderCell>
        <Table.HeaderCell>Afternoon</Table.HeaderCell>
        <Table.HeaderCell>Night</Table.HeaderCell>

        <Table.HeaderCell>Morning</Table.HeaderCell>
        <Table.HeaderCell>Afternoon</Table.HeaderCell>
        <Table.HeaderCell>Night</Table.HeaderCell>

        <Table.HeaderCell>Morning</Table.HeaderCell>
        <Table.HeaderCell>Afternoon</Table.HeaderCell>
        <Table.HeaderCell>Night</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        {/* <Table.Cell></Table.Cell> */}
        {/* <Table.Cell>Project 1</Table.Cell> */}
        <Table.Cell textAlign='right'>Nurse_1</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell color="#1d3de0"> LOL </Table.Cell>
        <Table.Cell textAlign='center'>
          <Button>
            Add Schedule
          </Button>
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        {/* <Table.Cell rowSpan='3'>Beta Team</Table.Cell> */}
        {/* <Table.Cell>Project 1</Table.Cell> */}
        <Table.Cell textAlign='right'>Nurse_2</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        {/* <Table.Cell>Project 2</Table.Cell> */}
        <Table.Cell textAlign='right'>Nurse_3</Table.Cell>
        <Table.Cell />
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        {/* <Table.Cell>Project 3</Table.Cell> */}
        <Table.Cell textAlign='right'>Nurse_4</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleStructured
