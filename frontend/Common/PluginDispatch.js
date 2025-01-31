import TestRun from "../TestRun/TestRun.svelte";
import DriverMatrixTestRun from "../TestRun/DriverMatrixTestRun.svelte";
import UnknownTest from "../WorkArea/UnknownTest.svelte";
import SirenadaTestRun from "../TestRun/Sirenada/SirenadaTestRun.svelte";

export const AVAILABLE_PLUGINS = {
    "scylla-cluster-tests": TestRun,
    "driver-matrix-tests": DriverMatrixTestRun,
    "sirenada": SirenadaTestRun,
    unknown: UnknownTest,
};

export const isPluginSupported = function(pluginName) {
    return (pluginName in AVAILABLE_PLUGINS);
};
