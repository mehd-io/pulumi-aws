// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Msk
{
    /// <summary>
    /// Manages AWS Managed Streaming for Kafka cluster
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/msk_cluster.html.markdown.
    /// </summary>
    public partial class Cluster : Pulumi.CustomResource
    {
        /// <summary>
        /// Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
        /// </summary>
        [Output("arn")]
        public Output<string> Arn { get; private set; } = null!;

        /// <summary>
        /// A comma separated list of one or more hostname:port pairs of kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `PLAINTEXT` or `TLS_PLAINTEXT`.
        /// </summary>
        [Output("bootstrapBrokers")]
        public Output<string> BootstrapBrokers { get; private set; } = null!;

        /// <summary>
        /// A comma separated list of one or more DNS names (or IPs) and TLS port pairs kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `TLS_PLAINTEXT` or `TLS`.
        /// </summary>
        [Output("bootstrapBrokersTls")]
        public Output<string> BootstrapBrokersTls { get; private set; } = null!;

        /// <summary>
        /// Configuration block for the broker nodes of the Kafka cluster.
        /// </summary>
        [Output("brokerNodeGroupInfo")]
        public Output<Outputs.ClusterBrokerNodeGroupInfo> BrokerNodeGroupInfo { get; private set; } = null!;

        /// <summary>
        /// Configuration block for specifying a client authentication. See below.
        /// </summary>
        [Output("clientAuthentication")]
        public Output<Outputs.ClusterClientAuthentication?> ClientAuthentication { get; private set; } = null!;

        /// <summary>
        /// Name of the MSK cluster.
        /// </summary>
        [Output("clusterName")]
        public Output<string> ClusterName { get; private set; } = null!;

        /// <summary>
        /// Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
        /// </summary>
        [Output("configurationInfo")]
        public Output<Outputs.ClusterConfigurationInfo?> ConfigurationInfo { get; private set; } = null!;

        /// <summary>
        /// Current version of the MSK Cluster used for updates, e.g. `K13V1IB3VIYZZH`
        /// * `encryption_info.0.encryption_at_rest_kms_key_arn` - The ARN of the KMS key used for encryption at rest of the broker data volumes.
        /// </summary>
        [Output("currentVersion")]
        public Output<string> CurrentVersion { get; private set; } = null!;

        /// <summary>
        /// Configuration block for specifying encryption. See below.
        /// </summary>
        [Output("encryptionInfo")]
        public Output<Outputs.ClusterEncryptionInfo?> EncryptionInfo { get; private set; } = null!;

        /// <summary>
        /// Specify the desired enhanced MSK CloudWatch monitoring level.  See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
        /// </summary>
        [Output("enhancedMonitoring")]
        public Output<string?> EnhancedMonitoring { get; private set; } = null!;

        /// <summary>
        /// Specify the desired Kafka software version.
        /// </summary>
        [Output("kafkaVersion")]
        public Output<string> KafkaVersion { get; private set; } = null!;

        /// <summary>
        /// The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
        /// </summary>
        [Output("numberOfBrokerNodes")]
        public Output<int> NumberOfBrokerNodes { get; private set; } = null!;

        /// <summary>
        /// Configuration block for JMX and Node monitoring for the MSK cluster. See below.
        /// </summary>
        [Output("openMonitoring")]
        public Output<Outputs.ClusterOpenMonitoring?> OpenMonitoring { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, object>?> Tags { get; private set; } = null!;

        /// <summary>
        /// A comma separated list of one or more hostname:port pairs to use to connect to the Apache Zookeeper cluster.
        /// </summary>
        [Output("zookeeperConnectString")]
        public Output<string> ZookeeperConnectString { get; private set; } = null!;


        /// <summary>
        /// Create a Cluster resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Cluster(string name, ClusterArgs args, CustomResourceOptions? options = null)
            : base("aws:msk/cluster:Cluster", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private Cluster(string name, Input<string> id, ClusterState? state = null, CustomResourceOptions? options = null)
            : base("aws:msk/cluster:Cluster", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Cluster resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Cluster Get(string name, Input<string> id, ClusterState? state = null, CustomResourceOptions? options = null)
        {
            return new Cluster(name, id, state, options);
        }
    }

    public sealed class ClusterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configuration block for the broker nodes of the Kafka cluster.
        /// </summary>
        [Input("brokerNodeGroupInfo", required: true)]
        public Input<Inputs.ClusterBrokerNodeGroupInfoArgs> BrokerNodeGroupInfo { get; set; } = null!;

        /// <summary>
        /// Configuration block for specifying a client authentication. See below.
        /// </summary>
        [Input("clientAuthentication")]
        public Input<Inputs.ClusterClientAuthenticationArgs>? ClientAuthentication { get; set; }

        /// <summary>
        /// Name of the MSK cluster.
        /// </summary>
        [Input("clusterName", required: true)]
        public Input<string> ClusterName { get; set; } = null!;

        /// <summary>
        /// Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
        /// </summary>
        [Input("configurationInfo")]
        public Input<Inputs.ClusterConfigurationInfoArgs>? ConfigurationInfo { get; set; }

        /// <summary>
        /// Configuration block for specifying encryption. See below.
        /// </summary>
        [Input("encryptionInfo")]
        public Input<Inputs.ClusterEncryptionInfoArgs>? EncryptionInfo { get; set; }

        /// <summary>
        /// Specify the desired enhanced MSK CloudWatch monitoring level.  See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
        /// </summary>
        [Input("enhancedMonitoring")]
        public Input<string>? EnhancedMonitoring { get; set; }

        /// <summary>
        /// Specify the desired Kafka software version.
        /// </summary>
        [Input("kafkaVersion", required: true)]
        public Input<string> KafkaVersion { get; set; } = null!;

        /// <summary>
        /// The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
        /// </summary>
        [Input("numberOfBrokerNodes", required: true)]
        public Input<int> NumberOfBrokerNodes { get; set; } = null!;

        /// <summary>
        /// Configuration block for JMX and Node monitoring for the MSK cluster. See below.
        /// </summary>
        [Input("openMonitoring")]
        public Input<Inputs.ClusterOpenMonitoringArgs>? OpenMonitoring { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        public ClusterArgs()
        {
        }
    }

    public sealed class ClusterState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// A comma separated list of one or more hostname:port pairs of kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `PLAINTEXT` or `TLS_PLAINTEXT`.
        /// </summary>
        [Input("bootstrapBrokers")]
        public Input<string>? BootstrapBrokers { get; set; }

        /// <summary>
        /// A comma separated list of one or more DNS names (or IPs) and TLS port pairs kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `TLS_PLAINTEXT` or `TLS`.
        /// </summary>
        [Input("bootstrapBrokersTls")]
        public Input<string>? BootstrapBrokersTls { get; set; }

        /// <summary>
        /// Configuration block for the broker nodes of the Kafka cluster.
        /// </summary>
        [Input("brokerNodeGroupInfo")]
        public Input<Inputs.ClusterBrokerNodeGroupInfoGetArgs>? BrokerNodeGroupInfo { get; set; }

        /// <summary>
        /// Configuration block for specifying a client authentication. See below.
        /// </summary>
        [Input("clientAuthentication")]
        public Input<Inputs.ClusterClientAuthenticationGetArgs>? ClientAuthentication { get; set; }

        /// <summary>
        /// Name of the MSK cluster.
        /// </summary>
        [Input("clusterName")]
        public Input<string>? ClusterName { get; set; }

        /// <summary>
        /// Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
        /// </summary>
        [Input("configurationInfo")]
        public Input<Inputs.ClusterConfigurationInfoGetArgs>? ConfigurationInfo { get; set; }

        /// <summary>
        /// Current version of the MSK Cluster used for updates, e.g. `K13V1IB3VIYZZH`
        /// * `encryption_info.0.encryption_at_rest_kms_key_arn` - The ARN of the KMS key used for encryption at rest of the broker data volumes.
        /// </summary>
        [Input("currentVersion")]
        public Input<string>? CurrentVersion { get; set; }

        /// <summary>
        /// Configuration block for specifying encryption. See below.
        /// </summary>
        [Input("encryptionInfo")]
        public Input<Inputs.ClusterEncryptionInfoGetArgs>? EncryptionInfo { get; set; }

        /// <summary>
        /// Specify the desired enhanced MSK CloudWatch monitoring level.  See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
        /// </summary>
        [Input("enhancedMonitoring")]
        public Input<string>? EnhancedMonitoring { get; set; }

        /// <summary>
        /// Specify the desired Kafka software version.
        /// </summary>
        [Input("kafkaVersion")]
        public Input<string>? KafkaVersion { get; set; }

        /// <summary>
        /// The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
        /// </summary>
        [Input("numberOfBrokerNodes")]
        public Input<int>? NumberOfBrokerNodes { get; set; }

        /// <summary>
        /// Configuration block for JMX and Node monitoring for the MSK cluster. See below.
        /// </summary>
        [Input("openMonitoring")]
        public Input<Inputs.ClusterOpenMonitoringGetArgs>? OpenMonitoring { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        /// <summary>
        /// A comma separated list of one or more hostname:port pairs to use to connect to the Apache Zookeeper cluster.
        /// </summary>
        [Input("zookeeperConnectString")]
        public Input<string>? ZookeeperConnectString { get; set; }

        public ClusterState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class ClusterBrokerNodeGroupInfoArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The distribution of broker nodes across availability zones ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-model-brokerazdistribution)). Currently the only valid value is `DEFAULT`.
        /// </summary>
        [Input("azDistribution")]
        public Input<string>? AzDistribution { get; set; }

        [Input("clientSubnets", required: true)]
        private InputList<string>? _clientSubnets;

        /// <summary>
        /// A list of subnets to connect to in client VPC ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-prop-brokernodegroupinfo-clientsubnets)).
        /// </summary>
        public InputList<string> ClientSubnets
        {
            get => _clientSubnets ?? (_clientSubnets = new InputList<string>());
            set => _clientSubnets = value;
        }

        /// <summary>
        /// The size in GiB of the EBS volume for the data drive on each broker node.
        /// </summary>
        [Input("ebsVolumeSize", required: true)]
        public Input<int> EbsVolumeSize { get; set; } = null!;

        /// <summary>
        /// Specify the instance type to use for the kafka brokers. e.g. kafka.m5.large. ([Pricing info](https://aws.amazon.com/msk/pricing/))
        /// </summary>
        [Input("instanceType", required: true)]
        public Input<string> InstanceType { get; set; } = null!;

        [Input("securityGroups", required: true)]
        private InputList<string>? _securityGroups;

        /// <summary>
        /// A list of the security groups to associate with the elastic network interfaces to control who can communicate with the cluster.
        /// </summary>
        public InputList<string> SecurityGroups
        {
            get => _securityGroups ?? (_securityGroups = new InputList<string>());
            set => _securityGroups = value;
        }

        public ClusterBrokerNodeGroupInfoArgs()
        {
        }
    }

    public sealed class ClusterBrokerNodeGroupInfoGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The distribution of broker nodes across availability zones ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-model-brokerazdistribution)). Currently the only valid value is `DEFAULT`.
        /// </summary>
        [Input("azDistribution")]
        public Input<string>? AzDistribution { get; set; }

        [Input("clientSubnets", required: true)]
        private InputList<string>? _clientSubnets;

        /// <summary>
        /// A list of subnets to connect to in client VPC ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-prop-brokernodegroupinfo-clientsubnets)).
        /// </summary>
        public InputList<string> ClientSubnets
        {
            get => _clientSubnets ?? (_clientSubnets = new InputList<string>());
            set => _clientSubnets = value;
        }

        /// <summary>
        /// The size in GiB of the EBS volume for the data drive on each broker node.
        /// </summary>
        [Input("ebsVolumeSize", required: true)]
        public Input<int> EbsVolumeSize { get; set; } = null!;

        /// <summary>
        /// Specify the instance type to use for the kafka brokers. e.g. kafka.m5.large. ([Pricing info](https://aws.amazon.com/msk/pricing/))
        /// </summary>
        [Input("instanceType", required: true)]
        public Input<string> InstanceType { get; set; } = null!;

        [Input("securityGroups", required: true)]
        private InputList<string>? _securityGroups;

        /// <summary>
        /// A list of the security groups to associate with the elastic network interfaces to control who can communicate with the cluster.
        /// </summary>
        public InputList<string> SecurityGroups
        {
            get => _securityGroups ?? (_securityGroups = new InputList<string>());
            set => _securityGroups = value;
        }

        public ClusterBrokerNodeGroupInfoGetArgs()
        {
        }
    }

    public sealed class ClusterClientAuthenticationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configuration block for specifying TLS client authentication. See below.
        /// </summary>
        [Input("tls")]
        public Input<ClusterClientAuthenticationTlsArgs>? Tls { get; set; }

        public ClusterClientAuthenticationArgs()
        {
        }
    }

    public sealed class ClusterClientAuthenticationGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configuration block for specifying TLS client authentication. See below.
        /// </summary>
        [Input("tls")]
        public Input<ClusterClientAuthenticationTlsGetArgs>? Tls { get; set; }

        public ClusterClientAuthenticationGetArgs()
        {
        }
    }

    public sealed class ClusterClientAuthenticationTlsArgs : Pulumi.ResourceArgs
    {
        [Input("certificateAuthorityArns")]
        private InputList<string>? _certificateAuthorityArns;

        /// <summary>
        /// List of ACM Certificate Authority Amazon Resource Names (ARNs).
        /// </summary>
        public InputList<string> CertificateAuthorityArns
        {
            get => _certificateAuthorityArns ?? (_certificateAuthorityArns = new InputList<string>());
            set => _certificateAuthorityArns = value;
        }

        public ClusterClientAuthenticationTlsArgs()
        {
        }
    }

    public sealed class ClusterClientAuthenticationTlsGetArgs : Pulumi.ResourceArgs
    {
        [Input("certificateAuthorityArns")]
        private InputList<string>? _certificateAuthorityArns;

        /// <summary>
        /// List of ACM Certificate Authority Amazon Resource Names (ARNs).
        /// </summary>
        public InputList<string> CertificateAuthorityArns
        {
            get => _certificateAuthorityArns ?? (_certificateAuthorityArns = new InputList<string>());
            set => _certificateAuthorityArns = value;
        }

        public ClusterClientAuthenticationTlsGetArgs()
        {
        }
    }

    public sealed class ClusterConfigurationInfoArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
        /// </summary>
        [Input("arn", required: true)]
        public Input<string> Arn { get; set; } = null!;

        /// <summary>
        /// Revision of the MSK Configuration to use in the cluster.
        /// </summary>
        [Input("revision", required: true)]
        public Input<int> Revision { get; set; } = null!;

        public ClusterConfigurationInfoArgs()
        {
        }
    }

    public sealed class ClusterConfigurationInfoGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
        /// </summary>
        [Input("arn", required: true)]
        public Input<string> Arn { get; set; } = null!;

        /// <summary>
        /// Revision of the MSK Configuration to use in the cluster.
        /// </summary>
        [Input("revision", required: true)]
        public Input<int> Revision { get; set; } = null!;

        public ClusterConfigurationInfoGetArgs()
        {
        }
    }

    public sealed class ClusterEncryptionInfoArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// You may specify a KMS key short ID or ARN (it will always output an ARN) to use for encrypting your data at rest.  If no key is specified, an AWS managed KMS ('aws/msk' managed service) key will be used for encrypting the data at rest.
        /// </summary>
        [Input("encryptionAtRestKmsKeyArn")]
        public Input<string>? EncryptionAtRestKmsKeyArn { get; set; }

        /// <summary>
        /// Configuration block to specify encryption in transit. See below.
        /// </summary>
        [Input("encryptionInTransit")]
        public Input<ClusterEncryptionInfoEncryptionInTransitArgs>? EncryptionInTransit { get; set; }

        public ClusterEncryptionInfoArgs()
        {
        }
    }

    public sealed class ClusterEncryptionInfoEncryptionInTransitArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Encryption setting for data in transit between clients and brokers. Valid values: `TLS`, `TLS_PLAINTEXT`, and `PLAINTEXT`. Default value: `TLS_PLAINTEXT`.
        /// </summary>
        [Input("clientBroker")]
        public Input<string>? ClientBroker { get; set; }

        /// <summary>
        /// Whether data communication among broker nodes is encrypted. Default value: `true`.
        /// </summary>
        [Input("inCluster")]
        public Input<bool>? InCluster { get; set; }

        public ClusterEncryptionInfoEncryptionInTransitArgs()
        {
        }
    }

    public sealed class ClusterEncryptionInfoEncryptionInTransitGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Encryption setting for data in transit between clients and brokers. Valid values: `TLS`, `TLS_PLAINTEXT`, and `PLAINTEXT`. Default value: `TLS_PLAINTEXT`.
        /// </summary>
        [Input("clientBroker")]
        public Input<string>? ClientBroker { get; set; }

        /// <summary>
        /// Whether data communication among broker nodes is encrypted. Default value: `true`.
        /// </summary>
        [Input("inCluster")]
        public Input<bool>? InCluster { get; set; }

        public ClusterEncryptionInfoEncryptionInTransitGetArgs()
        {
        }
    }

    public sealed class ClusterEncryptionInfoGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// You may specify a KMS key short ID or ARN (it will always output an ARN) to use for encrypting your data at rest.  If no key is specified, an AWS managed KMS ('aws/msk' managed service) key will be used for encrypting the data at rest.
        /// </summary>
        [Input("encryptionAtRestKmsKeyArn")]
        public Input<string>? EncryptionAtRestKmsKeyArn { get; set; }

        /// <summary>
        /// Configuration block to specify encryption in transit. See below.
        /// </summary>
        [Input("encryptionInTransit")]
        public Input<ClusterEncryptionInfoEncryptionInTransitGetArgs>? EncryptionInTransit { get; set; }

        public ClusterEncryptionInfoGetArgs()
        {
        }
    }

    public sealed class ClusterOpenMonitoringArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configuration block for Prometheus settings for open monitoring. See below.
        /// </summary>
        [Input("prometheus", required: true)]
        public Input<ClusterOpenMonitoringPrometheusArgs> Prometheus { get; set; } = null!;

        public ClusterOpenMonitoringArgs()
        {
        }
    }

    public sealed class ClusterOpenMonitoringGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configuration block for Prometheus settings for open monitoring. See below.
        /// </summary>
        [Input("prometheus", required: true)]
        public Input<ClusterOpenMonitoringPrometheusGetArgs> Prometheus { get; set; } = null!;

        public ClusterOpenMonitoringGetArgs()
        {
        }
    }

    public sealed class ClusterOpenMonitoringPrometheusArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configuration block for JMX Exporter. See below.
        /// </summary>
        [Input("jmxExporter")]
        public Input<ClusterOpenMonitoringPrometheusJmxExporterArgs>? JmxExporter { get; set; }

        /// <summary>
        /// Configuration block for Node Exporter. See below.
        /// </summary>
        [Input("nodeExporter")]
        public Input<ClusterOpenMonitoringPrometheusNodeExporterArgs>? NodeExporter { get; set; }

        public ClusterOpenMonitoringPrometheusArgs()
        {
        }
    }

    public sealed class ClusterOpenMonitoringPrometheusGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configuration block for JMX Exporter. See below.
        /// </summary>
        [Input("jmxExporter")]
        public Input<ClusterOpenMonitoringPrometheusJmxExporterGetArgs>? JmxExporter { get; set; }

        /// <summary>
        /// Configuration block for Node Exporter. See below.
        /// </summary>
        [Input("nodeExporter")]
        public Input<ClusterOpenMonitoringPrometheusNodeExporterGetArgs>? NodeExporter { get; set; }

        public ClusterOpenMonitoringPrometheusGetArgs()
        {
        }
    }

    public sealed class ClusterOpenMonitoringPrometheusJmxExporterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Indicates whether you want to enable or disable the Node Exporter.
        /// </summary>
        [Input("enabledInBroker", required: true)]
        public Input<bool> EnabledInBroker { get; set; } = null!;

        public ClusterOpenMonitoringPrometheusJmxExporterArgs()
        {
        }
    }

    public sealed class ClusterOpenMonitoringPrometheusJmxExporterGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Indicates whether you want to enable or disable the Node Exporter.
        /// </summary>
        [Input("enabledInBroker", required: true)]
        public Input<bool> EnabledInBroker { get; set; } = null!;

        public ClusterOpenMonitoringPrometheusJmxExporterGetArgs()
        {
        }
    }

    public sealed class ClusterOpenMonitoringPrometheusNodeExporterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Indicates whether you want to enable or disable the Node Exporter.
        /// </summary>
        [Input("enabledInBroker", required: true)]
        public Input<bool> EnabledInBroker { get; set; } = null!;

        public ClusterOpenMonitoringPrometheusNodeExporterArgs()
        {
        }
    }

    public sealed class ClusterOpenMonitoringPrometheusNodeExporterGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Indicates whether you want to enable or disable the Node Exporter.
        /// </summary>
        [Input("enabledInBroker", required: true)]
        public Input<bool> EnabledInBroker { get; set; } = null!;

        public ClusterOpenMonitoringPrometheusNodeExporterGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class ClusterBrokerNodeGroupInfo
    {
        /// <summary>
        /// The distribution of broker nodes across availability zones ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-model-brokerazdistribution)). Currently the only valid value is `DEFAULT`.
        /// </summary>
        public readonly string? AzDistribution;
        /// <summary>
        /// A list of subnets to connect to in client VPC ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-prop-brokernodegroupinfo-clientsubnets)).
        /// </summary>
        public readonly ImmutableArray<string> ClientSubnets;
        /// <summary>
        /// The size in GiB of the EBS volume for the data drive on each broker node.
        /// </summary>
        public readonly int EbsVolumeSize;
        /// <summary>
        /// Specify the instance type to use for the kafka brokers. e.g. kafka.m5.large. ([Pricing info](https://aws.amazon.com/msk/pricing/))
        /// </summary>
        public readonly string InstanceType;
        /// <summary>
        /// A list of the security groups to associate with the elastic network interfaces to control who can communicate with the cluster.
        /// </summary>
        public readonly ImmutableArray<string> SecurityGroups;

        [OutputConstructor]
        private ClusterBrokerNodeGroupInfo(
            string? azDistribution,
            ImmutableArray<string> clientSubnets,
            int ebsVolumeSize,
            string instanceType,
            ImmutableArray<string> securityGroups)
        {
            AzDistribution = azDistribution;
            ClientSubnets = clientSubnets;
            EbsVolumeSize = ebsVolumeSize;
            InstanceType = instanceType;
            SecurityGroups = securityGroups;
        }
    }

    [OutputType]
    public sealed class ClusterClientAuthentication
    {
        /// <summary>
        /// Configuration block for specifying TLS client authentication. See below.
        /// </summary>
        public readonly ClusterClientAuthenticationTls? Tls;

        [OutputConstructor]
        private ClusterClientAuthentication(ClusterClientAuthenticationTls? tls)
        {
            Tls = tls;
        }
    }

    [OutputType]
    public sealed class ClusterClientAuthenticationTls
    {
        /// <summary>
        /// List of ACM Certificate Authority Amazon Resource Names (ARNs).
        /// </summary>
        public readonly ImmutableArray<string> CertificateAuthorityArns;

        [OutputConstructor]
        private ClusterClientAuthenticationTls(ImmutableArray<string> certificateAuthorityArns)
        {
            CertificateAuthorityArns = certificateAuthorityArns;
        }
    }

    [OutputType]
    public sealed class ClusterConfigurationInfo
    {
        /// <summary>
        /// Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
        /// </summary>
        public readonly string Arn;
        /// <summary>
        /// Revision of the MSK Configuration to use in the cluster.
        /// </summary>
        public readonly int Revision;

        [OutputConstructor]
        private ClusterConfigurationInfo(
            string arn,
            int revision)
        {
            Arn = arn;
            Revision = revision;
        }
    }

    [OutputType]
    public sealed class ClusterEncryptionInfo
    {
        /// <summary>
        /// You may specify a KMS key short ID or ARN (it will always output an ARN) to use for encrypting your data at rest.  If no key is specified, an AWS managed KMS ('aws/msk' managed service) key will be used for encrypting the data at rest.
        /// </summary>
        public readonly string EncryptionAtRestKmsKeyArn;
        /// <summary>
        /// Configuration block to specify encryption in transit. See below.
        /// </summary>
        public readonly ClusterEncryptionInfoEncryptionInTransit? EncryptionInTransit;

        [OutputConstructor]
        private ClusterEncryptionInfo(
            string encryptionAtRestKmsKeyArn,
            ClusterEncryptionInfoEncryptionInTransit? encryptionInTransit)
        {
            EncryptionAtRestKmsKeyArn = encryptionAtRestKmsKeyArn;
            EncryptionInTransit = encryptionInTransit;
        }
    }

    [OutputType]
    public sealed class ClusterEncryptionInfoEncryptionInTransit
    {
        /// <summary>
        /// Encryption setting for data in transit between clients and brokers. Valid values: `TLS`, `TLS_PLAINTEXT`, and `PLAINTEXT`. Default value: `TLS_PLAINTEXT`.
        /// </summary>
        public readonly string? ClientBroker;
        /// <summary>
        /// Whether data communication among broker nodes is encrypted. Default value: `true`.
        /// </summary>
        public readonly bool? InCluster;

        [OutputConstructor]
        private ClusterEncryptionInfoEncryptionInTransit(
            string? clientBroker,
            bool? inCluster)
        {
            ClientBroker = clientBroker;
            InCluster = inCluster;
        }
    }

    [OutputType]
    public sealed class ClusterOpenMonitoring
    {
        /// <summary>
        /// Configuration block for Prometheus settings for open monitoring. See below.
        /// </summary>
        public readonly ClusterOpenMonitoringPrometheus Prometheus;

        [OutputConstructor]
        private ClusterOpenMonitoring(ClusterOpenMonitoringPrometheus prometheus)
        {
            Prometheus = prometheus;
        }
    }

    [OutputType]
    public sealed class ClusterOpenMonitoringPrometheus
    {
        /// <summary>
        /// Configuration block for JMX Exporter. See below.
        /// </summary>
        public readonly ClusterOpenMonitoringPrometheusJmxExporter? JmxExporter;
        /// <summary>
        /// Configuration block for Node Exporter. See below.
        /// </summary>
        public readonly ClusterOpenMonitoringPrometheusNodeExporter? NodeExporter;

        [OutputConstructor]
        private ClusterOpenMonitoringPrometheus(
            ClusterOpenMonitoringPrometheusJmxExporter? jmxExporter,
            ClusterOpenMonitoringPrometheusNodeExporter? nodeExporter)
        {
            JmxExporter = jmxExporter;
            NodeExporter = nodeExporter;
        }
    }

    [OutputType]
    public sealed class ClusterOpenMonitoringPrometheusJmxExporter
    {
        /// <summary>
        /// Indicates whether you want to enable or disable the Node Exporter.
        /// </summary>
        public readonly bool EnabledInBroker;

        [OutputConstructor]
        private ClusterOpenMonitoringPrometheusJmxExporter(bool enabledInBroker)
        {
            EnabledInBroker = enabledInBroker;
        }
    }

    [OutputType]
    public sealed class ClusterOpenMonitoringPrometheusNodeExporter
    {
        /// <summary>
        /// Indicates whether you want to enable or disable the Node Exporter.
        /// </summary>
        public readonly bool EnabledInBroker;

        [OutputConstructor]
        private ClusterOpenMonitoringPrometheusNodeExporter(bool enabledInBroker)
        {
            EnabledInBroker = enabledInBroker;
        }
    }
    }
}
