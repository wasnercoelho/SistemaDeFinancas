import * as C from '../TableItem/styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { BiTrashAlt } from 'react-icons/bi';
import removeItem from '../../App';


type Props = {
    item: Item
}

export const TableItem = ({item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>R$ {item.value}
                </C.Value>
                <C.TableColumn>
                
                </C.TableColumn>
               
            </C.TableColumn>
    
        </C.TableLine>
    );
}


