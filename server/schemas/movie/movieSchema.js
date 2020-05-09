const graphql = require('graphql');

const MovieType = require('./type/MovieType');
const DirectorsType = require('./type/DirectorType');

const movies = require('../../fackeData/fakeMovie');
const directors = require('../../fackeData/fakeDirectors');

const { GraphQLObjectType, GraphQLSchema, GraphQLID } = graphql;

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return movies.find(movie => movie.id === args.id);
            },
        },
        directors: {
            type: DirectorsType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return directors.find(director => director.id === args.id);
            },
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});
