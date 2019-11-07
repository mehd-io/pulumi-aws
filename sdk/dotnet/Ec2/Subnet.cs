// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2
{
    /// <summary>
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/subnet.html.markdown.
    /// </summary>
    public partial class Subnet : Pulumi.CustomResource
    {
        /// <summary>
        /// The ARN of the subnet.
        /// </summary>
        [Output("arn")]
        public Output<string> Arn { get; private set; } = null!;

        /// <summary>
        /// Specify true to indicate
        /// that network interfaces created in the specified subnet should be
        /// assigned an IPv6 address. Default is `false`
        /// </summary>
        [Output("assignIpv6AddressOnCreation")]
        public Output<bool?> AssignIpv6AddressOnCreation { get; private set; } = null!;

        /// <summary>
        /// The AZ for the subnet.
        /// </summary>
        [Output("availabilityZone")]
        public Output<string> AvailabilityZone { get; private set; } = null!;

        /// <summary>
        /// The AZ ID of the subnet.
        /// </summary>
        [Output("availabilityZoneId")]
        public Output<string> AvailabilityZoneId { get; private set; } = null!;

        /// <summary>
        /// The CIDR block for the subnet.
        /// </summary>
        [Output("cidrBlock")]
        public Output<string> CidrBlock { get; private set; } = null!;

        /// <summary>
        /// The IPv6 network range for the subnet,
        /// in CIDR notation. The subnet size must use a /64 prefix length.
        /// </summary>
        [Output("ipv6CidrBlock")]
        public Output<string> Ipv6CidrBlock { get; private set; } = null!;

        /// <summary>
        /// The association ID for the IPv6 CIDR block.
        /// </summary>
        [Output("ipv6CidrBlockAssociationId")]
        public Output<string> Ipv6CidrBlockAssociationId { get; private set; } = null!;

        /// <summary>
        /// Specify true to indicate
        /// that instances launched into the subnet should be assigned
        /// a public IP address. Default is `false`.
        /// </summary>
        [Output("mapPublicIpOnLaunch")]
        public Output<bool?> MapPublicIpOnLaunch { get; private set; } = null!;

        /// <summary>
        /// The ID of the AWS account that owns the subnet.
        /// </summary>
        [Output("ownerId")]
        public Output<string> OwnerId { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, object>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The VPC ID.
        /// </summary>
        [Output("vpcId")]
        public Output<string> VpcId { get; private set; } = null!;


        /// <summary>
        /// Create a Subnet resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Subnet(string name, SubnetArgs args, CustomResourceOptions? options = null)
            : base("aws:ec2/subnet:Subnet", name, args, MakeResourceOptions(options, ""))
        {
        }

        private Subnet(string name, Input<string> id, SubnetState? state = null, CustomResourceOptions? options = null)
            : base("aws:ec2/subnet:Subnet", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Subnet resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Subnet Get(string name, Input<string> id, SubnetState? state = null, CustomResourceOptions? options = null)
        {
            return new Subnet(name, id, state, options);
        }
    }

    public sealed class SubnetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specify true to indicate
        /// that network interfaces created in the specified subnet should be
        /// assigned an IPv6 address. Default is `false`
        /// </summary>
        [Input("assignIpv6AddressOnCreation")]
        public Input<bool>? AssignIpv6AddressOnCreation { get; set; }

        /// <summary>
        /// The AZ for the subnet.
        /// </summary>
        [Input("availabilityZone")]
        public Input<string>? AvailabilityZone { get; set; }

        /// <summary>
        /// The AZ ID of the subnet.
        /// </summary>
        [Input("availabilityZoneId")]
        public Input<string>? AvailabilityZoneId { get; set; }

        /// <summary>
        /// The CIDR block for the subnet.
        /// </summary>
        [Input("cidrBlock", required: true)]
        public Input<string> CidrBlock { get; set; } = null!;

        /// <summary>
        /// The IPv6 network range for the subnet,
        /// in CIDR notation. The subnet size must use a /64 prefix length.
        /// </summary>
        [Input("ipv6CidrBlock")]
        public Input<string>? Ipv6CidrBlock { get; set; }

        /// <summary>
        /// Specify true to indicate
        /// that instances launched into the subnet should be assigned
        /// a public IP address. Default is `false`.
        /// </summary>
        [Input("mapPublicIpOnLaunch")]
        public Input<bool>? MapPublicIpOnLaunch { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        /// <summary>
        /// The VPC ID.
        /// </summary>
        [Input("vpcId", required: true)]
        public Input<string> VpcId { get; set; } = null!;

        public SubnetArgs()
        {
        }
    }

    public sealed class SubnetState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ARN of the subnet.
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// Specify true to indicate
        /// that network interfaces created in the specified subnet should be
        /// assigned an IPv6 address. Default is `false`
        /// </summary>
        [Input("assignIpv6AddressOnCreation")]
        public Input<bool>? AssignIpv6AddressOnCreation { get; set; }

        /// <summary>
        /// The AZ for the subnet.
        /// </summary>
        [Input("availabilityZone")]
        public Input<string>? AvailabilityZone { get; set; }

        /// <summary>
        /// The AZ ID of the subnet.
        /// </summary>
        [Input("availabilityZoneId")]
        public Input<string>? AvailabilityZoneId { get; set; }

        /// <summary>
        /// The CIDR block for the subnet.
        /// </summary>
        [Input("cidrBlock")]
        public Input<string>? CidrBlock { get; set; }

        /// <summary>
        /// The IPv6 network range for the subnet,
        /// in CIDR notation. The subnet size must use a /64 prefix length.
        /// </summary>
        [Input("ipv6CidrBlock")]
        public Input<string>? Ipv6CidrBlock { get; set; }

        /// <summary>
        /// The association ID for the IPv6 CIDR block.
        /// </summary>
        [Input("ipv6CidrBlockAssociationId")]
        public Input<string>? Ipv6CidrBlockAssociationId { get; set; }

        /// <summary>
        /// Specify true to indicate
        /// that instances launched into the subnet should be assigned
        /// a public IP address. Default is `false`.
        /// </summary>
        [Input("mapPublicIpOnLaunch")]
        public Input<bool>? MapPublicIpOnLaunch { get; set; }

        /// <summary>
        /// The ID of the AWS account that owns the subnet.
        /// </summary>
        [Input("ownerId")]
        public Input<string>? OwnerId { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        /// <summary>
        /// The VPC ID.
        /// </summary>
        [Input("vpcId")]
        public Input<string>? VpcId { get; set; }

        public SubnetState()
        {
        }
    }
}