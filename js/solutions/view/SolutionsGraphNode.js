// Copyright 2002-2013, University of Colorado Boulder

/**
 * The graph for the 'Solutions' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // imports
  var ABSwitch = require( 'PH_SCALE/common/view/ABSwitch' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var GraphUnits = require( 'PH_SCALE/common/view/GraphUnits' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LinearConcentrationGraph = require( 'PH_SCALE/common/view/LinearConcentrationGraph' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Property = require( 'AXON/Property' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // strings
  var molesString = require( 'string!PH_SCALE/units.moles' );
  var molesPerLiterString = require( 'string!PH_SCALE/units.molesPerLiter' );

  // constants
  var GRAPH_SIZE = new Dimension2( 275, 530 );

  /**
   * @param {Solution} solution
   * @constructor
   */
  function SolutionsGraphNode( solution ) {

    var thisNode = this;
    Node.call( thisNode );

    var concentrationGraph = new LinearConcentrationGraph( solution );

    var unitsSwitch = new ABSwitch( new Property( GraphUnits.MOLES_PER_LITER ), GraphUnits.MOLES_PER_LITER, molesPerLiterString, GraphUnits.MOLES, molesString, {
      font: new PhetFont( 18 ),
      size: new Dimension2( 40, 20 ) } );

    // rendering order
    thisNode.addChild( concentrationGraph );
    thisNode.addChild( unitsSwitch );

    // layout
    concentrationGraph.centerX = unitsSwitch.centerX; //TODO center under on/off switch
    concentrationGraph.top = unitsSwitch.bottom + 10;
  }

  return inherit( Node, SolutionsGraphNode );
} );
