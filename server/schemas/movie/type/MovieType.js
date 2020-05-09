const graphql = require('graphql');
const DirectorsType = require('./DirectorType');
const directors = require('../../../fackeData/fakeDirectors');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

module.exports = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        directorId: {
            type: DirectorsType,
            resolve(parent) {
                return directors.find(director => director.id === parent.id);
            }
        },
        genre: { type: GraphQLString },
    }),
});
