import { workList } from './constants';

export const Works = () => {
  return (
    <div className='works'>
      {workList.map(({ id, title, description, className }) => {
        return (
          <div key={id} className={`work ${className}`}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};
