import Title from '../Title';
import CardPosition from '../CardPosition';
import './community.css';

const Community = () => {
  return (
    <div className="community">
      <Title text={'Community'} />
      <CardPosition position={0} />
      <CardPosition position={1} />
      <CardPosition position={2} />
      <CardPosition position={3} />
      <CardPosition position={4} />
    </div>
  );
};

export default Community;
