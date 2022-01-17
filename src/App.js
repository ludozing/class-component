import Hello from './components/Hello';
import Counter from './components/Counter';
import Customer from './components/Customer';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import './App.css';

function App() {
  const customers = [
    {
      id:1,
      image: "https://placeimg.com/64/64/any",
      name:"김그린",
      birthday: "20101109",
      gender: "여",
      job: "사무직회사원"
    },
    {
      id:2,
      image: "https://placeimg.com/64/64/any",
      name:"최블루",
      birthday: "19921028",
      gender: "남",
      job: "백수"
    },
    {
      id:3,
      image: "https://placeimg.com/64/64/any",
      name:"이레드",
      birthday: "20121205",
      gender: "여",
      job: "스포츠마케터"
    }
  ]
  return (
    <div className="App">
      <Hello color="red"/>
      <hr/>
      <Counter />
      <hr/>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <Customer image="https://placeimg.com/64/64/any" name="강하늘" birthday="20160106" gender="남" job="개발자" />
          {
            customers.map (customer => {
              return (
                <Customer
                  image="https://placeimg.com/64/64/any"
                  key={customer.id}
                  name={customer.name}
                  birthday={customer.birthday}
                  gender={customer.gender}
                  job={customer.job}
                />
              )
            })
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
