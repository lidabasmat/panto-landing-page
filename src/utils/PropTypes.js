import PropTypes from 'prop-types';

const imageFixedObject = PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    base64: PropTypes.string,
    tracedSVG: PropTypes.string,
    srcWebp: PropTypes.string,
    srcSetWebp: PropTypes.string,
    media: PropTypes.string,
});

const imageFluidObject = PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    base64: PropTypes.string,
    tracedSVG: PropTypes.string,
    srcWebp: PropTypes.string,
    srcSetWebp: PropTypes.string,
    media: PropTypes.string,
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number,
});

const location = PropTypes.shape({
    state: PropTypes.shape({
        key: PropTypes.string,
    }),
});

export default {
    ...PropTypes,
    imageFixedObject,
    imageFluidObject,
    location,
};
