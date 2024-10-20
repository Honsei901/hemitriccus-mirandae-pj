import { setAge, setName } from '../redux/slices/userSlice';
import { useAppDispatch, useAppSlector } from '../redux/hooks';

const User = () => {
  const dispatch = useAppDispatch();

  const name = useAppSlector((state) => state.user.name);
  const changeUsername = (str: string) => {
    dispatch(setName(str));
  };

  const age = useAppSlector((state) => state.user.age);
  const changeAge = (num: number) => {
    dispatch(setAge(num));
  };

  return (
    <div
      style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}
    >
      <div
        style={{
          width: '600px',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'center',
          borderStyle: 'solid',
        }}
      >
        <div>
          <p style={{ fontSize: 15 }}>
            Name: <span style={{ fontWeight: 'bold' }}>{name}</span>
          </p>
          <p style={{ fontSize: 15 }}>
            Age: <span style={{ fontWeight: 'bold' }}>{age}</span>
          </p>

          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => changeUsername(e.target.value)}
            />
          </div>

          <div>
            <input
              type="number"
              value={age}
              onChange={(e) => changeAge(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
