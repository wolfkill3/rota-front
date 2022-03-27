import React from 'react';
import './ProfileInfoBox.css';
import Table from './ProfileTable';
import makeData from './MakeData';
import styled from 'styled-components';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function ProfileInfoBox() {
	const data = React.useMemo(() => makeData(10), [])

	const columns = React.useMemo(
		() => [
			{
				Header: 'Дата',
				columns: [
					{
						Header: 'День',
						accessor: 'day',
					},
					{
						Header: 'Месяц',
						accessor: 'month',
					},
					{
						Header: 'Год',
						accessor: 'year',
					},
				],
			},
			{
				Header: 'Информация',
				columns: [
					{
						Header: 'Вероятность опасного маневра',
						accessor: 'dangerMomentProbability',
					},
					{
						Header: 'Последствия',
						accessor: 'aftermath',
					},
					{
						Header: 'Штраф',
						accessor: 'penalty',
					},
				],
			},
		],
		[]
	)

	return (
		<div className="profile-info-box p-box">
			<div className="p-box-info-container">
				<Styles className="table-container">
					<Table className="table-container" columns={columns} data={data} />
				</Styles>
			</div>
		</div>
	);
}

export default ProfileInfoBox;