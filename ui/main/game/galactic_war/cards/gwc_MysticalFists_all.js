define(['shared/gw_common'], function(GW) {
    return {
        visible: function(params) { return true; },
        describe: function(params) { 
            return 'MysticalFists Tech, Resource Hack, Build Time Hack, Commander Hack';
        },
        summarize: function(params) {
            return 'MysticalFists Tech';
        },
        icon: function(params) {
            return 'coui://ui/mods/MysticalFistsTech/MysticalFists.png';
        },
        getContext: function (galaxy) {
            return {
                totalSize: galaxy.stars().length
            };
        },
        deal: function (system, context) {
            var chance = 250; // Chance To Find
            return { chance: chance };
        },
        buff: function(inventory, params) {
	        inventory.addUnits([
				'/pa/units/land/metal_extractor_adv/metal_extractor_adv.json',
				'/pa/units/land/energy_plant_adv/energy_plant_adv.json',
				'/pa/units/land/metal_storage/metal_storage.json',
                '/pa/units/land/energy_storage/energy_storage.json',
				'/pa/units/land/vehicle_factory_adv/vehicle_factory_adv.json',
                '/pa/units/land/vehicle_factory/vehicle_factory.json',
                '/pa/units/land/tank_light_laser/tank_light_laser.json',
                '/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json',
                '/pa/units/land/tank_armor/tank_armor.json',
				'/pa/units/sea/naval_factory/naval_factory.json',
                '/pa/units/sea/naval_factory_adv/naval_factory_adv.json',
				'/pa/units/orbital/orbital_fighter/orbital_fighter.json',
                '/pa/units/orbital/radar_satellite/radar_satellite.json',
                '/pa/units/orbital/solar_array/solar_array.json',
                '/pa/units/orbital/orbital_factory/orbital_factory.json',
                '/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json',
                '/pa/units/orbital/orbital_laser/orbital_laser.json',
                '/pa/units/orbital/mining_platform/mining_platform.json',
				'/pa/units/air/air_factory/air_factory.json',
                '/pa/units/air/air_factory_adv/air_factory_adv.json',
                '/pa/units/air/air_scout/air_scout.json',
                '/pa/units/air/bomber/bomber.json',
                '/pa/units/air/fighter/fighter.json',
                '/pa/units/land/artillery_long/artillery_long.json',
                '/pa/units/land/artillery_short/artillery_short.json',
				'/pa/units/land/bot_factory_adv/bot_factory_adv.json',
                '/pa/units/land/bot_factory/bot_factory.json',
                '/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json',
                '/pa/units/land/assault_bot/assault_bot.json',
                '/pa/units/land/bot_grenadier/bot_grenadier.json',
                '/pa/units/land/bot_bomb/bot_bomb.json',
				'/pa/units/land/laser_defense_adv/laser_defense_adv.json',
                '/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json',
				'/pa/units/land/nuke_launcher/nuke_launcher.json',
                '/pa/units/orbital/delta_v_engine/delta_v_engine.json',
                '/pa/units/land/control_module/control_module.json',
                '/pa/units/land/air_defense_adv/air_defense_adv.json',
				'/pa/units/orbital/ion_defense/ion_defense.json',
				'/pa/units/land/land_barrier/land_barrier.json',
                '/pa/units/land/land_mine/land_mine.json',
                '/pa/units/land/air_defense/air_defense.json',
				'/pa/units/sea/torpedo_launcher/torpedo_launcher.json',
                '/pa/units/land/laser_defense_single/laser_defense_single.json', 
                '/pa/units/land/laser_defense/laser_defense.json',
			]);
            var units = [
                '/pa/units/land/metal_extractor/metal_extractor.json',
                '/pa/units/land/metal_extractor_adv/metal_extractor_adv.json',
                '/pa/units/commanders/base_commander/base_commander.json',
                '/pa/units/land/energy_plant/energy_plant.json',
                '/pa/units/land/energy_plant_adv/energy_plant_adv.json',
                '/pa/units/orbital/solar_array/solar_array.json',
				'/pa/units/orbital/orbital_fighter/orbital_fighter.json',
				'/pa/units/orbital/radar_satellite/radar_satellite.json',
				'/pa/units/orbital/orbital_factory/orbital_factory.json',
				'/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json',
				'/pa/units/orbital/orbital_laser/orbital_laser.json',
				'/pa/units/orbital/mining_platform/mining_platform.json',
				'/pa/units/air/air_scout/air_scout.json',
                '/pa/units/air/bomber/bomber.json',
                '/pa/units/air/fighter/fighter.json',
				'/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json',
                '/pa/units/land/assault_bot/assault_bot.json',
                '/pa/units/land/bot_grenadier/bot_grenadier.json',
                '/pa/units/land/bot_bomb/bot_bomb.json',
				'/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json',
				'/pa/units/land/artillery_long/artillery_long.json',
                '/pa/units/land/artillery_short/artillery_short.json',
				'/pa/units/land/vehicle_factory/vehicle_factory_build_arm.json',
                '/pa/units/land/fabrication_vehicle/fabrication_vehicle_build_arm.json',
                '/pa/units/land/vehicle_factory_adv/vehicle_factory_adv_build_arm.json',
                '/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv_build_arm.json',
                '/pa/units/land/bot_factory/bot_factory_build_arm.json',
                '/pa/units/land/fabrication_bot/fabrication_bot_build_arm.json',
                '/pa/units/land/fabrication_bot_combat/fabrication_bot_combat_build_arm.json',
                '/pa/units/land/bot_factory_adv/bot_factory_adv_build_arm.json',
                '/pa/units/land/fabrication_bot_adv/fabrication_bot_adv_build_arm.json',
                '/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv_build_arm.json',
                '/pa/units/air/air_factory/air_factory_build_arm.json',
                '/pa/units/air/fabrication_aircraft/fabrication_aircraft_build_arm.json',
                '/pa/units/air/air_factory_adv/air_factory_adv_build_arm.json',
                '/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv_build_arm.json',
                '/pa/units/sea/naval_factory/naval_factory_build_arm.json',
                '/pa/units/sea/fabrication_ship/fabrication_ship_build_arm.json',
                '/pa/units/sea/naval_factory_adv/naval_factory_adv_build_arm.json',
                '/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv_build_arm.json',
                '/pa/units/orbital/orbital_launcher/orbital_launcher_build_arm.json',
                '/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot_build_arm.json',
                '/pa/units/orbital/orbital_factory/orbital_factory_build_arm.json',
                '/pa/units/land/anti_nuke_launcher/anti_nuke_launcher_build_arm.json',
				'/pa/units/land/nuke_launcher/nuke_launcher_build_arm.json',
                '/pa/tools/commander_build_arm/commander_build_arm.json',
				'/pa/units/air/air_factory_adv/air_factory_adv.json',
                '/pa/units/land/bot_factory_adv/bot_factory_adv.json',
                '/pa/units/land/vehicle_factory_adv/vehicle_factory_adv.json',
				'/pa/units/land/nuke_launcher/nuke_launcher.json',
                '/pa/units/orbital/delta_v_engine/delta_v_engine.json',
                '/pa/units/land/control_module/control_module.json',
                '/pa/units/sea/naval_factory_adv/naval_factory_adv.json',
				'/pa/units/land/artillery_long/artillery_long_tool_weapon.json'
            ];
            var mods = [];
            var modUnit = function(unit) {
                mods.push({ // Nav Move Speed
                    file: unit,
                    path: 'navigation.move_speed',
                    op: 'multiply',
                    value: 4
                });
                mods.push({ // Nav Break Speed
                    file: unit,
                    path: 'navigation.brake',
                    op: 'multiply',
                    value: 4
                });
                mods.push({ // Nav Acceleration
                    file: unit,
                    path: 'navigation.acceleration',
                    op: 'multiply',
                    value: 4
                });
                mods.push({ // Nav Turn Speed
                    file: unit,
                    path: 'navigation.turn_speed',
                    op: 'multiply',
                    value: 4
				});
				mods.push({ // Energy Production Speed
                    file: unit,
                    path: 'production.energy',
                    op: 'multiply',
                    value: 6.00
                });
                mods.push({ // Metal Production Speed
                    file: unit,
                    path: 'production.metal',
                    op: 'multiply',
                    value: 50.00
                });
				mods.push({ // Construction Speed
                    file: unit,
                    path: 'construction_demand.metal',
                    op: 'multiply',
                    value: 20.0
                });
                mods.push({ // Building Energy Demand
                    file: unit,
                    path: 'construction_demand.energy',
                    op: 'multiply',
                    value: 0.1
                });
				mods.push({ // Building Metal Demand
                    file: unit,
                    path: 'build_metal_cost',
                    op: 'multiply',
                    value: 0.1
                });
                mods.push({ // Unit Health
                    file: unit,
                    path: 'max_health',
                    op: 'multiply',
                    value: 2.0
                });
				mods.push({ // Energy Storage
                    file: unit,
                    path: 'storage.energy',
                    op: 'multiply',
                    value: 20.0
                });
                mods.push({ // Metal Storage
                    file: unit,
                    path: 'storage.metal',
                    op: 'multiply',
                    value: 20.0
                });
            };
            _.forEach(units, modUnit);
            inventory.addMods(mods);
        },
        dull: function(inventory) {
        }
    };
});
