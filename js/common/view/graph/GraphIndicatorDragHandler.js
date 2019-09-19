// Copyright 2014-2018, University of Colorado Boulder

/**
 * Drag handler for the interactive graph indicators.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const GraphUnits = require( 'PH_SCALE/common/view/graph/GraphUnits' );
  const inherit = require( 'PHET_CORE/inherit' );
  const phScale = require( 'PH_SCALE/phScale' );
  const PHScaleConstants = require( 'PH_SCALE/common/PHScaleConstants' );
  const SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );
  const Solute = require( 'PH_SCALE/common/model/Solute' );
  const Util = require( 'DOT/Util' );

  /**
   * @param {Solution} solution
   * @param {Property.<GraphUnits>} graphUnitsProperty
   * @param {function} yToValue - function that takes a {number} y coordinate and converts it to a {number} model value
   * @param {function} concentrationToPH - takes {number} concentration, returns pH
   * @param {function} molesToPH - takes {number} moles and {number} volume (L), returns pH
   * @constructor
   */
  function GraphIndicatorDragHandler( solution, graphUnitsProperty, yToValue, concentrationToPH, molesToPH ) {

    let clickYOffset; // y-offset between initial click and indicator's origin

    SimpleDragHandler.call( this, {

      allowTouchSnag: true,

      // Record the offset between the pointer and the indicator's origin.
      start: function( event ) {
        clickYOffset = event.currentTarget.globalToParentPoint( event.pointer.point ).y - event.currentTarget.y;
      },

      // When the indicator is dragged, create a custom solute that corresponds to the new pH.
      drag: function( event ) {

        // If the solution volume is zero (empty beaker), then we have no solution, and therefore no pH, so do nothing.
        if ( solution.volumeProperty.get() !== 0 ) {

          // Adjust the y-coordinate for the offset between the pointer and the indicator's origin
          const y = event.currentTarget.globalToParentPoint( event.pointer.point ).y - clickYOffset;

          // Convert the y-coordinate to a model value
          const value = yToValue( y );

          // Map the model value to pH, depending on which units we're using.
          let pH = ( graphUnitsProperty.get() === GraphUnits.MOLES_PER_LITER ) ? concentrationToPH( value ) : molesToPH( value, solution.volumeProperty.get() );

          // Constrain the pH to the valid range
          pH = Util.clamp( pH, PHScaleConstants.PH_RANGE.min, PHScaleConstants.PH_RANGE.max );

          // Instantiate a new 'custom' solute with the desired pH, and use it with the solution.
          solution.soluteProperty.set( Solute.createCustom( pH ) );
        }
      }
    } );
  }

  phScale.register( 'GraphIndicatorDragHandler', GraphIndicatorDragHandler );

  return inherit( SimpleDragHandler, GraphIndicatorDragHandler );
} );
