import React from 'react';
import './ProfileInfoBox.css';
import * as ReactDOM from 'react-dom';
import { getToken, getUser } from '../../Utils/Common';
import restPost from '../../Utils/RestPost';
import Table from './ProfileTable';
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
`;

function ProfileInfoBox() {
	const TableRender = ({ data }) => <Table className="table-object" columns={data.columns} data={data.data}/>;
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
		[],
	);
	let data = {};
	const getProfileTableData = () => {
		console.log('test2');
		const request = { login: getUser(), token: getToken() };
		restPost('/profile/table', request, success, exception);

		async function success(response) {
			data = {
				'data': response.data,
				'columns': columns,
			};
			console.log(data);
			ReactDOM.render(<TableRender data={data}/>, document.getElementById('table-object'));
		}

		function exception(response) {
			data = {
				'data': response.data,
				'columns': columns,
			};
			console.log(data);
			ReactDOM.render(<TableRender data={data}/>, document.getElementById('table-object'));
		}
	};

	console.log('test1');
	getProfileTableData();

	return (
		<div className="profile-info-box p-box">
			<div className="p-box-info-container">
				<Styles className="table-container">
					<div className="table-object-prerender" id="table-object"/>
				</Styles>
			</div>
		</div>
	);
}

export default ProfileInfoBox;