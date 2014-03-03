// Copyright 2002-2014, University of Colorado Boulder

/**
 * Graph indicator that points to the value for H2O (water).
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var GraphIndicator = require( 'PH_SCALE/common/view/graph/GraphIndicator' );
  var H2ONode = require( 'PH_SCALE/common/view/molecules/H2ONode' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var PHScaleColors = require( 'PH_SCALE/common/PHScaleColors' );
  var PHScaleConstants = require( 'PH_SCALE/common/PHScaleConstants' );
  var SubSupText = require( 'SCENERY_PHET/SubSupText' );

  /**
   * @param {Property<Number>} valueProperty
   * @param {*} options
   * @constructor
   */
  function H2OIndicator( valueProperty, options ) {

    options = _.extend( {
      exponent: 0,
      mantissaDecimalPlaces: 0,
      backgroundFill: PHScaleColors.H2O_BACKGROUND,
      pointerLocation: 'bottomLeft'
    }, options );

    GraphIndicator.call( this, valueProperty,
      new H2ONode(),
      new SubSupText( PHScaleConstants.H2O_FORMULA, { font: new PhetFont( 28 ), fill: 'white' } ),
      options );
  }

  return inherit( GraphIndicator, H2OIndicator );
} );