// !LOCNS:galactic_war
define(['shared/gw_common'], function (GW) {
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
        audio: function (parms) {
            return {
                found: '/VO/Computer/gw/board_tech_available_economy'
            }
        },
        getContext: function (galaxy) {
            return {
                totalSize: galaxy.stars().length
            };
        },
        deal: function (system, context, inventory) {
            var chance = 1000;
            var dist = system.distance();
            if (dist > 0) {
                if (context.totalSize <= GW.balance.numberOfSystems[0]) {
                    chance = 1000;
                    if (dist > 4)
                        chance = 1000;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[1]) {
                    chance = 1000;
                    if (dist > 6)
                        chance = 1000;
                } 
                else if (context.totalSize <= GW.balance.numberOfSystems[2]) {
                    chance = 1000;
                    if (dist > 9)
                        chance = 1000;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[3]) {
                    chance = 1000;
                    if (dist > 10)
                        chance = 1000;
                }
                else {
                    chance = 1000;
                    if (dist > 12)
                        chance = 1000;
                }
            }
            return { chance: chance };
        },
        buff: function(inventory, params) {
	        inventory.addUnits([
    "/pa/units/air/air_factory/air_factory.json",
    "/pa/units/air/air_factory_adv/air_factory_adv.json",
    "/pa/units/air/air_scout/air_scout.json",
    "/pa/units/air/base_flyer/base_flyer.json",
    "/pa/units/air/bomber/bomber.json",
    "/pa/units/air/bomber_adv/bomber_adv.json",
    "/pa/units/air/fabrication_aircraft/fabrication_aircraft.json",
    "/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json",
    "/pa/units/air/fighter/fighter.json",
    "/pa/units/air/fighter_adv/fighter_adv.json",
    "/pa/units/air/gunship/gunship.json",
    "/pa/units/air/transport/transport.json",
    "/pa/units/commanders/avatar/avatar.json",
    "/pa/units/commanders/base_commander/base_commander.json",
    "/pa/units/commanders/imperial_able/imperial_able.json",
    "/pa/units/commanders/imperial_aceal/imperial_aceal.json",
    "/pa/units/commanders/imperial_alpha/imperial_alpha.json",
    "/pa/units/commanders/imperial_aryst0krat/imperial_aryst0krat.json",
    "/pa/units/commanders/imperial_base/imperial_base.json",
    "/pa/units/commanders/imperial_chronoblip/imperial_chronoblip.json",
    "/pa/units/commanders/imperial_delta/imperial_delta.json",
    "/pa/units/commanders/imperial_enzomatrix/imperial_enzomatrix.json",
    "/pa/units/commanders/imperial_fiveleafclover/imperial_fiveleafclover.json",
    "/pa/units/commanders/imperial_gamma/imperial_gamma.json",
    "/pa/units/commanders/imperial_gnugfur/imperial_gnugfur.json",
    "/pa/units/commanders/imperial_invictus/imperial_invictus.json",
    "/pa/units/commanders/imperial_kapowaz/imperial_kapowaz.json",
    "/pa/units/commanders/imperial_mjon/imperial_mjon.json",
    "/pa/units/commanders/imperial_progenitor/imperial_progenitor.json",
    "/pa/units/commanders/imperial_sangudo/imperial_sangudo.json",
    "/pa/units/commanders/imperial_seniorhelix/imperial_seniorhelix.json",
    "/pa/units/commanders/imperial_stelarch/imperial_stelarch.json",
    "/pa/units/commanders/imperial_thechessknight/imperial_thechessknight.json",
    "/pa/units/commanders/imperial_theta/imperial_theta.json",
    "/pa/units/commanders/imperial_toddfather/imperial_toddfather.json",
    "/pa/units/commanders/quad_ajax/quad_ajax.json",
    "/pa/units/commanders/quad_armalisk/quad_armalisk.json",
    "/pa/units/commanders/quad_base/quad_base.json",
    "/pa/units/commanders/quad_calyx/quad_calyx.json",
    "/pa/units/commanders/quad_gambitdfa/quad_gambitdfa.json",
    "/pa/units/commanders/quad_mobiousblack/quad_mobiousblack.json",
    "/pa/units/commanders/quad_osiris/quad_osiris.json",
    "/pa/units/commanders/quad_potbelly79/quad_potbelly79.json",
    "/pa/units/commanders/quad_raventhornn/quad_raventhornn.json",
    "/pa/units/commanders/quad_sacrificiallamb/quad_sacrificiallamb.json",
    "/pa/units/commanders/quad_shadowdaemon/quad_shadowdaemon.json",
    "/pa/units/commanders/quad_spartandano/quad_spartandano.json",
    "/pa/units/commanders/quad_spiderofmean/quad_spiderofmean.json",
    "/pa/units/commanders/quad_theflax/quad_theflax.json",
    "/pa/units/commanders/quad_tokamaktech/quad_tokamaktech.json",
    "/pa/units/commanders/quad_twoboots/quad_twoboots.json",
    "/pa/units/commanders/quad_xenosentryprime/quad_xenosentryprime.json",
    "/pa/units/commanders/quad_xinthar/quad_xinthar.json",
    "/pa/units/commanders/raptor_base/raptor_base.json",
    "/pa/units/commanders/raptor_beast/raptor_beast.json",
    "/pa/units/commanders/raptor_beniesk/raptor_beniesk.json",
    "/pa/units/commanders/raptor_betadyne/raptor_betadyne.json",
    "/pa/units/commanders/raptor_centurion/raptor_centurion.json",
    "/pa/units/commanders/raptor_diremachine/raptor_diremachine.json",
    "/pa/units/commanders/raptor_iwmiked/raptor_iwmiked.json",
    "/pa/units/commanders/raptor_majuju/raptor_majuju.json",
    "/pa/units/commanders/raptor_nemicus/raptor_nemicus.json",
    "/pa/units/commanders/raptor_rallus/raptor_rallus.json",
    "/pa/units/commanders/raptor_stickman9000/raptor_stickman9000.json",
    "/pa/units/commanders/raptor_zaazzaa/raptor_zaazzaa.json",
    "/pa/units/commanders/tank_aeson/tank_aeson.json",
    "/pa/units/commanders/tank_banditks/tank_banditks.json",
    "/pa/units/commanders/tank_base/tank_base.json",
    "/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json",
    "/pa/units/land/air_defense/air_defense.json",
    "/pa/units/land/air_defense_adv/air_defense_adv.json",
    "/pa/units/land/anti_nuke_launcher/anti_nuke_launcher.json",
    "/pa/units/land/artillery_long/artillery_long.json",
    "/pa/units/land/artillery_short/artillery_short.json",
    "/pa/units/land/assault_bot/assault_bot.json",
    "/pa/units/land/assault_bot_adv/assault_bot_adv.json",
    "/pa/units/land/avatar_factory/avatar_factory.json",
    "/pa/units/land/base_bot/base_bot.json",
    "/pa/units/land/base_structure/base_structure.json",
    "/pa/units/land/base_vehicle/base_vehicle.json",
    "/pa/units/land/bot_aa/bot_aa.json",
    "/pa/units/land/bot_bomb/bot_bomb.json",
    "/pa/units/land/bot_factory/bot_factory.json",
    "/pa/units/land/bot_factory_adv/bot_factory_adv.json",
    "/pa/units/land/bot_grenadier/bot_grenadier.json",
    "/pa/units/land/bot_sniper/bot_sniper.json",
    "/pa/units/land/bot_spider_adv/bot_spider_adv.json",
    "/pa/units/land/bot_tactical_missile/bot_tactical_missile.json",
    "/pa/units/land/control_module/control_module.json",
    "/pa/units/land/energy_plant/energy_plant.json",
    "/pa/units/land/energy_plant_adv/energy_plant_adv.json",
    "/pa/units/land/energy_storage/energy_storage.json",
    "/pa/units/land/fabrication_bot/fabrication_bot.json",
    "/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json",
    "/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json",
    "/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json",
    "/pa/units/land/fabrication_vehicle/fabrication_vehicle.json",
    "/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json",
    "/pa/units/land/land_barrier/land_barrier.json",
    "/pa/units/land/land_mine/land_mine.json",
    "/pa/units/land/land_scout/land_scout.json",
    "/pa/units/land/laser_defense/laser_defense.json",
    "/pa/units/land/laser_defense_adv/laser_defense_adv.json",
    "/pa/units/land/laser_defense_single/laser_defense_single.json",
    "/pa/units/land/metal_extractor/metal_extractor.json",
    "/pa/units/land/metal_extractor_adv/metal_extractor_adv.json",
    "/pa/units/land/metal_storage/metal_storage.json",
    "/pa/units/land/nuke_launcher/nuke_launcher.json",
    "/pa/units/land/radar/radar.json",
    "/pa/units/land/radar_adv/radar_adv.json",
    "/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json",
    "/pa/units/land/tank_armor/tank_armor.json",
    "/pa/units/land/tank_heavy_armor/tank_heavy_armor.json",
    "/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json",
    "/pa/units/land/tank_laser_adv/tank_laser_adv.json",
    "/pa/units/land/tank_light_laser/tank_light_laser.json",
    "/pa/units/land/teleporter/teleporter.json",
    "/pa/units/land/unit_cannon/unit_cannon.json",
    "/pa/units/land/vehicle_factory/vehicle_factory.json",
    "/pa/units/land/vehicle_factory_adv/vehicle_factory_adv.json",
    "/pa/units/orbital/base_orbital/base_orbital.json",
    "/pa/units/orbital/base_orbital_structure/base_orbital_structure.json",
    "/pa/units/orbital/deep_space_radar/deep_space_radar.json",
    "/pa/units/orbital/defense_satellite/defense_satellite.json",
    "/pa/units/orbital/delta_v_engine/delta_v_engine.json",
    "/pa/units/orbital/ion_defense/ion_defense.json",
    "/pa/units/orbital/mining_platform/mining_platform.json",
    "/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json",
    "/pa/units/orbital/orbital_factory/orbital_factory.json",
    "/pa/units/orbital/orbital_fighter/orbital_fighter.json",
    "/pa/units/orbital/orbital_lander/orbital_lander.json",
    "/pa/units/orbital/orbital_laser/orbital_laser.json",
    "/pa/units/orbital/orbital_launcher/orbital_launcher.json",
    "/pa/units/orbital/radar_satellite/radar_satellite.json",
    "/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json",
    "/pa/units/orbital/solar_array/solar_array.json",
    "/pa/units/sea/attack_sub/attack_sub.json",
    "/pa/units/sea/base_ship/base_ship.json",
    "/pa/units/sea/battleship/battleship.json",
    "/pa/units/sea/destroyer/destroyer.json",
    "/pa/units/sea/fabrication_ship/fabrication_ship.json",
    "/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json",
    "/pa/units/sea/frigate/frigate.json",
    "/pa/units/sea/missile_ship/missile_ship.json",
    "/pa/units/sea/naval_factory/naval_factory.json",
    "/pa/units/sea/naval_factory_adv/naval_factory_adv.json",
    "/pa/units/sea/nuclear_sub/nuclear_sub.json",
    "/pa/units/sea/sea_mine/sea_mine.json",
    "/pa/units/sea/sea_scout/sea_scout.json",
    "/pa/units/sea/torpedo_launcher/torpedo_launcher.json",
    "/pa/units/sea/torpedo_launcher_adv/torpedo_launcher_adv.json",
			]);
            var units = [
    "/pa/units/air/air_factory/air_factory.json",
    "/pa/units/air/air_factory_adv/air_factory_adv.json",
    "/pa/units/air/air_scout/air_scout.json",
    "/pa/units/air/base_flyer/base_flyer.json",
    "/pa/units/air/bomber/bomber.json",
    "/pa/units/air/bomber_adv/bomber_adv.json",
    "/pa/units/air/fabrication_aircraft/fabrication_aircraft.json",
    "/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json",
    "/pa/units/air/fighter/fighter.json",
    "/pa/units/air/fighter_adv/fighter_adv.json",
    "/pa/units/air/gunship/gunship.json",
    "/pa/units/air/transport/transport.json",
    "/pa/units/commanders/avatar/avatar.json",
    "/pa/units/commanders/base_commander/base_commander.json",
    "/pa/units/commanders/imperial_able/imperial_able.json",
    "/pa/units/commanders/imperial_aceal/imperial_aceal.json",
    "/pa/units/commanders/imperial_alpha/imperial_alpha.json",
    "/pa/units/commanders/imperial_aryst0krat/imperial_aryst0krat.json",
    "/pa/units/commanders/imperial_base/imperial_base.json",
    "/pa/units/commanders/imperial_chronoblip/imperial_chronoblip.json",
    "/pa/units/commanders/imperial_delta/imperial_delta.json",
    "/pa/units/commanders/imperial_enzomatrix/imperial_enzomatrix.json",
    "/pa/units/commanders/imperial_fiveleafclover/imperial_fiveleafclover.json",
    "/pa/units/commanders/imperial_gamma/imperial_gamma.json",
    "/pa/units/commanders/imperial_gnugfur/imperial_gnugfur.json",
    "/pa/units/commanders/imperial_invictus/imperial_invictus.json",
    "/pa/units/commanders/imperial_kapowaz/imperial_kapowaz.json",
    "/pa/units/commanders/imperial_mjon/imperial_mjon.json",
    "/pa/units/commanders/imperial_progenitor/imperial_progenitor.json",
    "/pa/units/commanders/imperial_sangudo/imperial_sangudo.json",
    "/pa/units/commanders/imperial_seniorhelix/imperial_seniorhelix.json",
    "/pa/units/commanders/imperial_stelarch/imperial_stelarch.json",
    "/pa/units/commanders/imperial_thechessknight/imperial_thechessknight.json",
    "/pa/units/commanders/imperial_theta/imperial_theta.json",
    "/pa/units/commanders/imperial_toddfather/imperial_toddfather.json",
    "/pa/units/commanders/quad_ajax/quad_ajax.json",
    "/pa/units/commanders/quad_armalisk/quad_armalisk.json",
    "/pa/units/commanders/quad_base/quad_base.json",
    "/pa/units/commanders/quad_calyx/quad_calyx.json",
    "/pa/units/commanders/quad_gambitdfa/quad_gambitdfa.json",
    "/pa/units/commanders/quad_mobiousblack/quad_mobiousblack.json",
    "/pa/units/commanders/quad_osiris/quad_osiris.json",
    "/pa/units/commanders/quad_potbelly79/quad_potbelly79.json",
    "/pa/units/commanders/quad_raventhornn/quad_raventhornn.json",
    "/pa/units/commanders/quad_sacrificiallamb/quad_sacrificiallamb.json",
    "/pa/units/commanders/quad_shadowdaemon/quad_shadowdaemon.json",
    "/pa/units/commanders/quad_spartandano/quad_spartandano.json",
    "/pa/units/commanders/quad_spiderofmean/quad_spiderofmean.json",
    "/pa/units/commanders/quad_theflax/quad_theflax.json",
    "/pa/units/commanders/quad_tokamaktech/quad_tokamaktech.json",
    "/pa/units/commanders/quad_twoboots/quad_twoboots.json",
    "/pa/units/commanders/quad_xenosentryprime/quad_xenosentryprime.json",
    "/pa/units/commanders/quad_xinthar/quad_xinthar.json",
    "/pa/units/commanders/raptor_base/raptor_base.json",
    "/pa/units/commanders/raptor_beast/raptor_beast.json",
    "/pa/units/commanders/raptor_beniesk/raptor_beniesk.json",
    "/pa/units/commanders/raptor_betadyne/raptor_betadyne.json",
    "/pa/units/commanders/raptor_centurion/raptor_centurion.json",
    "/pa/units/commanders/raptor_diremachine/raptor_diremachine.json",
    "/pa/units/commanders/raptor_iwmiked/raptor_iwmiked.json",
    "/pa/units/commanders/raptor_majuju/raptor_majuju.json",
    "/pa/units/commanders/raptor_nemicus/raptor_nemicus.json",
    "/pa/units/commanders/raptor_rallus/raptor_rallus.json",
    "/pa/units/commanders/raptor_stickman9000/raptor_stickman9000.json",
    "/pa/units/commanders/raptor_zaazzaa/raptor_zaazzaa.json",
    "/pa/units/commanders/tank_aeson/tank_aeson.json",
    "/pa/units/commanders/tank_banditks/tank_banditks.json",
    "/pa/units/commanders/tank_base/tank_base.json",
    "/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json",
    "/pa/units/land/air_defense/air_defense.json",
    "/pa/units/land/air_defense_adv/air_defense_adv.json",
    "/pa/units/land/anti_nuke_launcher/anti_nuke_launcher.json",
    "/pa/units/land/artillery_long/artillery_long.json",
    "/pa/units/land/artillery_short/artillery_short.json",
    "/pa/units/land/assault_bot/assault_bot.json",
    "/pa/units/land/assault_bot_adv/assault_bot_adv.json",
    "/pa/units/land/avatar_factory/avatar_factory.json",
    "/pa/units/land/base_bot/base_bot.json",
    "/pa/units/land/base_structure/base_structure.json",
    "/pa/units/land/base_vehicle/base_vehicle.json",
    "/pa/units/land/bot_aa/bot_aa.json",
    "/pa/units/land/bot_bomb/bot_bomb.json",
    "/pa/units/land/bot_factory/bot_factory.json",
    "/pa/units/land/bot_factory_adv/bot_factory_adv.json",
    "/pa/units/land/bot_grenadier/bot_grenadier.json",
    "/pa/units/land/bot_sniper/bot_sniper.json",
    "/pa/units/land/bot_spider_adv/bot_spider_adv.json",
    "/pa/units/land/bot_tactical_missile/bot_tactical_missile.json",
    "/pa/units/land/control_module/control_module.json",
    "/pa/units/land/energy_plant/energy_plant.json",
    "/pa/units/land/energy_plant_adv/energy_plant_adv.json",
    "/pa/units/land/energy_storage/energy_storage.json",
    "/pa/units/land/fabrication_bot/fabrication_bot.json",
    "/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json",
    "/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json",
    "/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json",
    "/pa/units/land/fabrication_vehicle/fabrication_vehicle.json",
    "/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json",
    "/pa/units/land/land_barrier/land_barrier.json",
    "/pa/units/land/land_mine/land_mine.json",
    "/pa/units/land/land_scout/land_scout.json",
    "/pa/units/land/laser_defense/laser_defense.json",
    "/pa/units/land/laser_defense_adv/laser_defense_adv.json",
    "/pa/units/land/laser_defense_single/laser_defense_single.json",
    "/pa/units/land/metal_extractor/metal_extractor.json",
    "/pa/units/land/metal_extractor_adv/metal_extractor_adv.json",
    "/pa/units/land/metal_storage/metal_storage.json",
    "/pa/units/land/nuke_launcher/nuke_launcher.json",
    "/pa/units/land/radar/radar.json",
    "/pa/units/land/radar_adv/radar_adv.json",
    "/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json",
    "/pa/units/land/tank_armor/tank_armor.json",
    "/pa/units/land/tank_heavy_armor/tank_heavy_armor.json",
    "/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json",
    "/pa/units/land/tank_laser_adv/tank_laser_adv.json",
    "/pa/units/land/tank_light_laser/tank_light_laser.json",
    "/pa/units/land/teleporter/teleporter.json",
    "/pa/units/land/unit_cannon/unit_cannon.json",
    "/pa/units/land/vehicle_factory/vehicle_factory.json",
    "/pa/units/land/vehicle_factory_adv/vehicle_factory_adv.json",
    "/pa/units/orbital/base_orbital/base_orbital.json",
    "/pa/units/orbital/base_orbital_structure/base_orbital_structure.json",
    "/pa/units/orbital/deep_space_radar/deep_space_radar.json",
    "/pa/units/orbital/defense_satellite/defense_satellite.json",
    "/pa/units/orbital/delta_v_engine/delta_v_engine.json",
    "/pa/units/orbital/ion_defense/ion_defense.json",
    "/pa/units/orbital/mining_platform/mining_platform.json",
    "/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json",
    "/pa/units/orbital/orbital_factory/orbital_factory.json",
    "/pa/units/orbital/orbital_fighter/orbital_fighter.json",
    "/pa/units/orbital/orbital_lander/orbital_lander.json",
    "/pa/units/orbital/orbital_laser/orbital_laser.json",
    "/pa/units/orbital/orbital_launcher/orbital_launcher.json",
    "/pa/units/orbital/radar_satellite/radar_satellite.json",
    "/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json",
    "/pa/units/orbital/solar_array/solar_array.json",
    "/pa/units/sea/attack_sub/attack_sub.json",
    "/pa/units/sea/base_ship/base_ship.json",
    "/pa/units/sea/battleship/battleship.json",
    "/pa/units/sea/destroyer/destroyer.json",
    "/pa/units/sea/fabrication_ship/fabrication_ship.json",
    "/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json",
    "/pa/units/sea/frigate/frigate.json",
    "/pa/units/sea/missile_ship/missile_ship.json",
    "/pa/units/sea/naval_factory/naval_factory.json",
    "/pa/units/sea/naval_factory_adv/naval_factory_adv.json",
    "/pa/units/sea/nuclear_sub/nuclear_sub.json",
    "/pa/units/sea/sea_mine/sea_mine.json",
    "/pa/units/sea/sea_scout/sea_scout.json",
    "/pa/units/sea/torpedo_launcher/torpedo_launcher.json",
    "/pa/units/sea/torpedo_launcher_adv/torpedo_launcher_adv.json",
	            ];
            var mods = [];
            var modUnit = function(unit) {
				mods.push({ // Energy Production Speed
                    file: unit,
                    path: 'production.energy',
                    op: 'multiply',
                    value: 500.00
                });
                mods.push({ // Metal Production Speed
                    file: unit,
                    path: 'production.metal',
                    op: 'multiply',
                    value: 500.00
                });
				mods.push({ // Construction Speed
                    file: unit,
                    path: 'construction_demand.metal',
                    op: 'multiply',
                    value: 500.0
                });
                mods.push({ // Building Energy Demand
                    file: unit,
                    path: 'construction_demand.energy',
                    op: 'multiply',
                    value: 0.01
                });
				mods.push({ // Building Metal Demand
                    file: unit,
                    path: 'build_metal_cost',
                    op: 'multiply',
                    value: 0.01
                });
                mods.push({ // Unit Health
                    file: unit,
                    path: 'max_health',
                    op: 'multiply',
                    value: 3.0
                });
				mods.push({ // Energy Storage
                    file: unit,
                    path: 'storage.energy',
                    op: 'multiply',
                    value: 500.0
                });
                mods.push({ // Metal Storage
                    file: unit,
                    path: 'storage.metal',
                    op: 'multiply',
                    value: 500.0
                });
            };
            _.forEach(units, modUnit);
            inventory.addMods(mods);
        },
        dull: function(inventory) {
        }
    };
});
