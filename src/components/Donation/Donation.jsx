import PropTypes from 'prop-types'; // ES6

const Donation = () => {
    // console.log(donatedItems);

    return (
        <div>
            {/* {donatedItems.length} */}
            <h1>this is our donation amount</h1>
        </div>
    );
};

Donation.propTypes = {
    donatedItems:PropTypes.object.isRequired,
}

export default Donation;