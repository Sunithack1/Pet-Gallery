import ImageToggleOnScroll from './ImageToggleOnScroll';

const PetDetail = React.memo(({ petRec, onHeartFavoriteHandler }) => {
  const { id, firstName, bio, favorite } = petRec;

  return (
    <div className="card col-4 cardmin image-info">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/pets/pet-${id}.jpg`}        
        alt="{firstName} {lastName}"
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={(e) => {
              onHeartFavoriteHandler(e, petRec);
            }}
          />
          <span>
            {firstName}
          </span>
        </h4>
        <span>{bio}</span>
      </div>
    </div>
  );
});

export default PetDetail;
