// Type definitions for the application
export const EntityTypes = {
  VICTIM: 'victim',
  MULE: 'mule',
  SPLITTER: 'splitter',
  BRIDGE: 'bridge',
  CONSOLIDATOR: 'consolidator',
  EXCHANGE: 'exchange',
  EXIT: 'exit'
}

export const RiskLevels = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
}

export const ConfidenceLevels = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
}

export const EvidenceTypes = {
  TRANSACTION: 'transaction',
  PATTERN: 'pattern',
  ENTITY: 'entity',
  TIMING: 'timing'
}

export const Verdicts = {
  SUPPORTED: 'supported',
  UNSUPPORTED: 'unsupported',
  INCONCLUSIVE: 'inconclusive'
}