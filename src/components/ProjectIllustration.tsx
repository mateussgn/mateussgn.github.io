import type { Illustration } from "@/content/types";
import styles from "./ProjectIllustration.module.css";

/**
 * Simple drawings that stand in for screenshots, since client work is under NDA.
 * Decorative: the card's text says the same thing.
 */
export function ProjectIllustration({ kind }: { kind: Illustration }) {
  return (
    <div className={`${styles.frame} ${styles[kind]}`} aria-hidden="true">
      {kind === "pass-rate" && <PassRate />}
      {kind === "services" && <Services />}
      {kind === "low-code" && <LowCode />}
    </div>
  );
}

function PassRate() {
  return (
    <>
      <div className={styles.barGroup}>
        <span className={styles.barValue}>10%</span>
        <span className={`${styles.bar} ${styles.barBefore}`} />
        <span className={styles.barLabel}>Before</span>
      </div>
      <div className={styles.barGroup}>
        <span className={`${styles.barValue} ${styles.barValueStrong}`}>90%</span>
        <span className={`${styles.bar} ${styles.barAfter}`} />
        <span className={styles.barLabel}>After</span>
      </div>
      <div className={styles.note}>
        E2E runs
        <br />
        <strong>passing</strong>
      </div>
    </>
  );
}

function Services() {
  return (
    <>
      <div className={styles.row}>
        <span className={styles.gateway}>REST API</span>
      </div>
      <div className={styles.row}>
        <span className={styles.connector} />
      </div>
      <div className={styles.row}>
        <span className={styles.service}>Payments</span>
        <span className={styles.service}>Billing</span>
        <span className={styles.service}>Reports</span>
      </div>
      <div className={styles.queue}>
        <span className={styles.queueDot} />
        RabbitMQ / AWS SQS
      </div>
    </>
  );
}

function LowCode() {
  return (
    <div className={styles.window}>
      <div className={styles.palette}>
        <span>Text</span>
        <span>Number</span>
        <span>Date</span>
        <span>Picklist</span>
      </div>
      <div className={styles.canvas}>
        <span className={styles.formTitle}>New object: Invoice</span>
        <span className={styles.field} />
        <span className={styles.field} />
        <span className={`${styles.field} ${styles.fieldActive}`} />
        <span className={styles.save} />
      </div>
    </div>
  );
}
