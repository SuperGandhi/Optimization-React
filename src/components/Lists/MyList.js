import {memo} from 'react';
import {isEqual} from 'lodash';

const Li = memo(({children}) => {
  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
} , isEqual)

const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}
          fullname={`${x.name} ${x.lastname}`}
        />
      )}
    </ul>
  )
}


export default memo(MyList)
